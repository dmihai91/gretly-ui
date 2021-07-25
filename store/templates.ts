import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex';
import { Template } from '~/interfaces/Template';

const demoData = [
	{
		id: '1',
		name: 'Test',
		description: 'This is a test template',
		previewImg: 'http://s3.amazonaws.com/creativetim_bucket/products/55/thumb/opt_mdp_angular_thumbnail.jpg?1551358096',
		htmlContent: null,
		cssContent: null
	}
];

export const state = () => ({
	// the templates created by the user
	data: [] as Template[],
	// the latest templates
	latest: [...demoData] as Template[],
	// the popular templates
	popular: [] as Template[],
	// the current template created by the user
	currentTemplate: null as Template
});

export const getters = getterTree(state, {});
export const mutations = mutationTree(state, {});
export const actions = actionTree({ state, getters, mutations }, {});
