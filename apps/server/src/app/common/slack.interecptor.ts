import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { auth } from 'firebase-admin';
import { IncomingWebhook, IncomingWebhookDefaultArguments } from '@slack/client';
import 'rxjs/add/operator/do';

@Injectable()
export class SlackInterceptor implements NestInterceptor {
  args: IncomingWebhookDefaultArguments = {};
  botUrl = 'https://hooks.slack.com/services/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';
  slack = new IncomingWebhook(this.botUrl, this.args);

  intercept(context: ExecutionContext, stream$: Observable<any>): Observable<any> {
    const req = context.switchToHttp().getRequest();
    return stream$.do(
      () => {
        auth().getUser(req.uid)
          .then(user => {
            let slackMessage = `${this.createMessage(req.route, req.body, req.params)}\nIt was completed by ${user.displayName}.`
            this.slack.send(slackMessage, this.slackCallback)
          })
          .catch(err => console.log(err))
      });
  }

  createMessage(route, body, params) {
    let methods = route.methods;
    let message = '';
    if (methods.put) {
      message = `Item #${params.id} has been Updated.`;
    }
    if (methods.delete) {
      message = `Item #${params.id} has been Deleted.`;
    }
    if (methods.post) {
      message = `A New Item named ${body.name} has been Created.`;
    }
    return message;
  }

  slackCallback(err, res?) {
    if (err) {
      console.log('Error: ', err);
    }
    else {
      console.log('Message sent', res);
    }
  }
}