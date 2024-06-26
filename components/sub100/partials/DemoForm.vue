<template>
    <div class="contact-info ps-90 ps-md-0 ps-sm-0 ps-xs-0">
        <form id="app" class="become-teacher-form" @submit.prevent="checkForm" method="post" autocomplete="off" v-if="!success && !loading">
            <input type="hidden" name="tipo_mail" id="tipo_mail" value="Solicite uma demonstração"/>
            <h5 class="max-mb-30">Preencha o formulário abaixo com seus dados:</h5>
            <div class="row">
                <div class="col-md-12 max-mb-30">
                    <input type="text" placeholder="Empresa " name="empresa" id="empresa"  v-model="empresa">
                </div>
                <div class="col-md-12 max-mb-30">
                    <input type="text" placeholder="Nome do contato *" name="contato" id="contato"  v-model="contato">
                </div>
                <div class="col-md-6 max-mb-30">
                    <input type="text" placeholder="Telefone *" name="phone"  id="phone" v-mask="['(##) ####-####', '(##) #####-####']"  v-model="phone">
                </div>
                <div class="col-md-6 max-mb-30">
                    <input type="email" placeholder="Email *" name="email" id="email"  v-model="email">
                </div>
                <div class="col-md-6 max-mb-30">
                    <input type="cidade" placeholder="Cidade *" name="cidade" id="cidade"  v-model="cidade">
                </div>
                <div class="col-md-6 max-mb-30">
                    <select name="estado" placeholder="Selecione um estado" id="estado" v-model="estado" :class="{place: !estado}">
                        <option value="" selected>Estado *</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>
                <h4 class="col-md-12 max-mb-10 text-start">Mensagem</h4>
                <div class="col-12 max-mb-30">
                    <input type="hidden" name="produto" id="produto" value="Site personalizado" v-model="produto">
                    <textarea placeholder="Deixa sua mensagem e nos informe o melhor horário e como deseja ser contatado. *" name="message" id="message"  v-model="message"></textarea>
                    <div class="col-12 max-mb-30 d-flex">
                        <input type="checkbox" class="form-check-input" id="aceito" name="aceito" v-model="aceito" :true-value="true" :false-value="false">
                        <label class="form-check-label ps-2" for="aceito">Aceito os <n-link to="/lgpd/termos-de-uso/" class="text-primary">Termos de uso</n-link> e a <n-link to="/lgpd/politica-de-privacidade/" class="text-primary d-inline">Política de privacidade</n-link> e afirmo ter mais de 18 anos.</label>
                    </div>
                    <p v-if="errors.length" class="info pt-3">
                        <b class="title text-primary">Por favor preencha o(s) campo(s) obrigatório(s)</b>
                        <ul class="pt-2">
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                </div>
                <div class="col-12">
                    <input type="submit" class="btn btn-secondary btn-hover-primary btn-width-180" value="Enviar" :disabled="loading">
                </div>
            </div>
        </form>
        <div class="col-12 section-padding text-center d-block info" v-if="loading">
            <div class="loadingio-spinner-dual-ring-zo5azsgap1m">
                <div class="ldio-a8you79c3x6">
                    <div></div>
                    <div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 section-padding mt=4 mb-4 text-center d-block info" v-else-if="obrigado">
            <img src="/images/svg/visto.svg">
            <h4 class="title mb-2 mt-4 fz-30">Obrigado!</h4>
            <p class="fz-20">Seu formulário foi enviado com sucesso.</p>
        </div>
    </div>
</template>
<style>
    #produto, #estado{height: 52px;}
</style>
<script> 
import {mask} from 'vue-the-mask'
import axios from 'axios'

export default {
        directives: {mask},
        data() {
            return{
                errors: [],
                empresa: null,
                contato: null,
                phone: null,
                email: null,
                produto: null,
                cidade: null,
                estado: "",
                message: null,
                aceito: null,
                success: false,
                loading: false,
                obrigado: false
            }
        },
        async mounted() {
            try {
                await this.$recaptcha.init()
            } catch (e) {
                console.log(e);
            }
        },

        methods:{
           
            checkForm: async function (e) {
                e.preventDefault();

                try {
                    const token = await this.$recaptcha.execute('login')
                    console.log('ReCaptcha token:', token)
                    this.errors = [];
                    if (!this.contato) {
                        this.errors.push('Contato');
                    }
                    if (!this.phone) {
                        this.errors.push('Telefone');
                    }
                    if (!this.email) {
                        this.errors.push('Email');
                    }
                    if (!this.cidade) {
                        this.errors.push('Cidade');
                    }
                    if (!this.estado) {
                        this.errors.push('Estado');
                    }
                    if (!this.message) {
                        this.errors.push('Mensagem');
                    }
                    if (!this.aceito) {
                        this.errors.push('Aceito');
                    }
                    if (!this.errors.length) {
                        this.loading = true;
                        await axios.post('https://email.sub100.com.br/sub100sistemas/form.php', {
                        'token': token,
                        'tipo_mail': "Solicite um orçamento do site personalizado",
                        'site': "SUB100 Imobiliárias",
                        'empresa': this.empresa,
                        'contato': this.contato,
                        'phone': this.phone,
                        'email': this.email,
                        'produto': this.produto,
                        'cidade': this.cidade,
                        'estado': this.estado,
                        'message': this.message,
                        'aceito': this.aceito
                        }).then(response => {
                            console.log('success', response.data);
                            this.success = true;
                        }).catch(error => {
                            console.log(error.response)
                        }).finally(() => {
                            this.loading = false;
                            this.obrigado = true;
                            this.$emit('obrigado');
                        });
                        return true;
                    }
                } catch (error) {
                    console.log('Login error:', error)
                }                
            }
        }
    }
</script>