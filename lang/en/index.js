import login from './login.json';
import register from './register.json';
import pricing from './pricing.json';
import index from './index.json';
import global from './global.json';
import projects from './projects.json';
import menu from './menu.json';
import footer from './footer.json';
import resetPassword from './resetPassword.json';

const messages = { messages: { ...login.messages, ...register.messages } };

export default {
  ...global,
  ...login,
  ...register,
  ...messages,
  ...index,
  ...pricing,
  ...projects,
  ...menu,
  ...footer,
  ...resetPassword,
};
