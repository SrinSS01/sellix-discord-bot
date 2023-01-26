const inquirer = require('inquirer')
const fs = require('fs');

var questions = [
  {
    type: 'input',
    name: 'token',
    message: "Discord Bot Token: "
  },
  {
    type: 'input',
    name: 'sellix_auth',
    message: "Sellix API Key: "
  },
  {
    type: 'input',
    name: 'prefix',
    message: "Command Prefix: "
  },
  {
    type: 'input',
    name: 'admins',
    message: "Comma-Seperated List of Admin Discord ID's: "
  },
  {
    type: 'input',
    name: 'webhook_channels',
    message: "Default Discord Channel ID to Send Webhooks: "
  },
  {
    type: 'input',
    name: 'role_to_give',
    message: "Discord Role ID to give users when they redeem an order: "
  },
  {
    type: 'input',
    name: 'temporary_role_IDs',
    message: "Comma-Seperated List of Discord Role ID's to give users for specific time period when they redeem an order: "
  },
  {
    type: 'input',
    name: 'time_period_in_seconds',
    message: "Time period in seconds to give users the temporary role: "
  }
]

inquirer.prompt(questions).then(answers => {
  answers['webhook_channels'] = {"default":answers['webhook_channels']};
  answers['admins'] = answers['admins'].split(',');
  answers['temporary_role_IDs'] = answers['temporary_role_IDs'].split(',');
  answers['time_period_in_seconds'] = parseInt(answers['time_period_in_seconds']);
  answers['nicknames'] = {'exampleProduct':'6abc74103id'};
  fs.writeFile('./config.json',JSON.stringify(answers,null,' \t'),function(err,data){
      console.log(answers);
  });
  console.log('config.json created successfully');
})
