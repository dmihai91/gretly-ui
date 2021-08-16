import { createDecorator } from 'vue-class-component';
import { validationMixin, ValidationRuleset } from 'vuelidate';

export const Validations = (validations: ValidationRuleset<any>) =>
  createDecorator((options) => {
    // component options should be passed to the callback
    // and update for the options object affect the component
    options.mixins = [...options.mixins, validationMixin];
    options['validations'] = validations;
  });
