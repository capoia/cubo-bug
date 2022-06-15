import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Menubar from 'primevue/menubar';
import Breadcrumb from 'primevue/breadcrumb';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import Toast from 'primevue/toast';
import PanelMenu from 'primevue/panelmenu';
import TieredMenu from 'primevue/tieredmenu';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';
import Card from 'primevue/card';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Toolbar from 'primevue/toolbar';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import DropDown from 'primevue/dropdown';
import Password from 'primevue/password';

import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        ripple: true,
        locale: {
            startsWith: 'Começa com',
            contains: 'Contém',
            notContains: 'Não contém',
            endsWith: 'Termina com',
            equals: 'Igual',
            notEquals: 'Diferente',
            noFilter: 'Sem Filtro',
            lt: 'Menor que',
            lte: 'Menor que ou igual a',
            gt: 'Maior que',
            gte: 'Maior que ou igual a',
            dateIs: 'Data é',
            dateIsNot: 'Data não é',
            dateBefore: 'Data é antes',
            dateAfter: 'Data é depois',
            clear: 'Limpar',
            apply: 'Aplicar',
            matchAll: 'Corresponder todos',
            matchAny: 'Corresponder a qualquer',
            addRule: 'Adicionar regra',
            removeRule: 'Remover regra',
            accept: 'Sim',
            reject: 'Não',
            choose: 'Escolha',
            upload: 'Upload',
            cancel: 'Cancelar',
            dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            dayNamesMin: ["Do","Se","Te","Qua","Qui","Se","Sa"],
            monthNames: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            today: 'Hoje',
            weekHeader: 'Sem',
            firstDayOfWeek: 0,
            dateFormat: 'dd/mm/yyyy',
            weak: 'Fraca',
            medium: 'Mediana',
            strong: 'Forte',
            passwordPrompt: 'Insira a senha',
            emptyFilterMessage: 'Nenhum resultado encontrado',
            emptyMessage: 'Nenhuma opção disponível'
        }
    });
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('Menubar', Menubar);
    nuxtApp.vueApp.component('Breadcrumb', Breadcrumb);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Menu', Menu);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('PanelMenu', PanelMenu);
    nuxtApp.vueApp.component('TieredMenu', TieredMenu);
    nuxtApp.vueApp.component('Avatar', Avatar);
    nuxtApp.vueApp.component('Divider', Divider);
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('TabView', TabView);
    nuxtApp.vueApp.component('TabPanel', TabPanel);
    nuxtApp.vueApp.component('Toolbar', Toolbar);
    nuxtApp.vueApp.component('DataView', DataView);
    nuxtApp.vueApp.component('DataViewLayoutOptions', DataViewLayoutOptions);
    nuxtApp.vueApp.component('Dropdown', DropDown);
    nuxtApp.vueApp.component('Password', Password);
});