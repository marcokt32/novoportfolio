const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oAuth2Client = new OAuth2(
  'Y257429936432-9b6u5r2ckq68bmnlvqh8fufek3kskiuk.apps.googleusercontent.com', // Substitua pelo seu Client ID
  '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', // Substitua pelo seu Client Secret
  'https://marcokt32.github.io' // Substitua pela sua URL de redirecionamento
);

// Obtenha o URL de autenticação e autorize a aplicação
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/gmail.send']
});

// Depois de obter o código de autenticação, troque pelo token de acesso
// oAuth2Client.getToken(code, (err, token) => {
//   if (err) return console.error('Error retrieving access token', err);
//   oAuth2Client.setCredentials(token);
// });

// Exemplo de envio de e-mail
const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

const sendEmail = async () => {
  const raw = makeBody('to@example.com', 'from@example.com', 'Subject', 'Message body');
  const res = await gmail.users.messages.send({
    userId: 'me',
    resource: {
      raw: raw
    }
  });
  console.log(res.data);
};

function makeBody(to, from, subject, message) {
  const str = [
    'Content-Type: text/plain; charset="UTF-8"\n',
    'MIME-Version: 1.0\n',
    'Content-Transfer-Encoding: 7bit\n',
    'to: ', to, '\n',
    'from: ', from, '\n',
    'subject: ', subject, '\n\n',
    message
  ].join('');

  return Buffer.from(str).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
}

sendEmail().catch(console.error);