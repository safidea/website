import type { Automation } from '@safidea_/engine'

export const newContributor: Automation = {
  name: 'newContributor',
  trigger: {
    trigger: 'RecordCreated',
    table: 'contributors',
  },
  actions: [
    {
      name: 'send-alert-email',
      action: 'SendEmail',
      from: '$MAILER_FROM',
      to: '$MAILER_TO',
      subject: 'Demande de contribution de {{trigger.name}}',
      text: 'Email : {{trigger.email}}\n\nPourquoi : {{trigger.why}}\n\nComment : {{trigger.how}}\n\nQuoi : {{trigger.what}}\n\nCompétences : {{trigger.skills}}',
      html: 'Email : {{trigger.email}}\n\nPourquoi : {{trigger.why}}\n\nComment : {{trigger.how}}\n\nQuoi : {{trigger.what}}\n\nCompétences : {{trigger.skills}}',
    },
  ],
}
