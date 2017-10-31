
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.Bus = new Vue()

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


Vue.component('ui-button', require('./components/ButtonComponent.vue'));
Vue.component('ui-layout', require('./components/LayoutComponent.vue'));
Vue.component('ui-table', require('./components/TableComponent.vue'));
Vue.component('ui-modal', require('./components/ModalComponent.vue'));
Vue.component('ui-screen', require('./components/ScreenComponent.vue'));
Vue.component('ui-data-table', require('./components/DataTableComponent.vue'));

Vue.component('usim-collection-index', require('./components/app/CollectionIndexComponent.vue'));

Vue.component('usim-product-index', require('./components/app/ProductIndexComponent.vue'));
Vue.component('usim-product-search', require('./components/app/ProductSearchComponent.vue'));

Vue.component('usim-showcase-index', require('./components/app/ShowcaseIndexComponent.vue'));

Vue.component('usim-add-product-modal', require('./components/app/modals/AddProductModal.vue'));
Vue.component('usim-create-collection-modal', require('./components/app/modals/CreateCollectionModal.vue'));
Vue.component('usim-create-showcase-modal', require('./components/app/modals/CreateShowcaseModal.vue'));


Vue.component('usim-collection-data-table', require('./components/app/dataTables/CollectionDataTable.vue'));
Vue.component('usim-product-data-table', require('./components/app/dataTables/ProductDataTable.vue'));
Vue.component('usim-showcase-data-table', require('./components/app/dataTables/ShowcaseDataTable.vue'));

Vue.component('usim-showcase-editor', require('./components/app/ShowcaseEditor/ShowcaseEditor.vue'));

const app = new Vue({
    el: '#app'
});
