<template>
    <div class="contact-info ps-90 ps-md-0 ps-sm-0 ps-xs-0">
        <form id="app" class="become-teacher-form" @submit.prevent="checkForm" method="post" autocomplete="off" v-if="!success && !loading">
            <input type="hidden" name="tipo_mail" id="tipo_mail" value="Solicite uma demonstração"/>
            <h5 class="mb-0 fs-4 lh-sm">Preencha o formulário para acessar o sistema por <span class="text-secondary">30 dias grátis</span></h5>
            <div class="row">
                <h4 class="col-md-12 text-primary pb-3 pt-4 fs-5">Identificação</h4>
                <div class="col-md-6 max-mb-30">
                    <select name="tipo" placeholder="Tipo de anúncio *" id="tipo" aria-label="Tipo de anúncio *" v-model="tipo" :class="{place: !tipo}">
                        <option value="" disabled selected hidden>Tipo de plano *</option>
                        <option value="Plano Urbano">Urbano</option>
                        <option value="Plano Rural">Rural</option>
                    </select>
                </div>
                <div class="col-md-6 max-mb-30" >
                    <select name="pessoa" placeholder="Tipo de pessoa *" id="pessoa" aria-label="Tipo de pessoa *" v-model="pessoa" :class="{place: !pessoa}" @change="getPersonByPessoa($event.target.value)">
                        <option value="" disabled selected hidden>Tipo de pessoa *</option>
                        <option value="Jurídica">Jurídica</option>
                        <option value="Física">Física</option>
                    </select>
                </div>

                <div class="col-md-4 max-mb-30" v-show="pessoaInput === 'Jurídica'">
                    <input type="text" placeholder="CNPJ *" name="cnpj" id="cnpj" v-mask="['##.###.###/####-##']" v-model="cnpj" @blur="getPersonByCNPJ($event.target.value)" @keydown.enter="$event.target.blur()">
                </div>

                <div class="col-md-4 max-mb-30" v-show="pessoaInput === 'Física'">
                    <input type="text" placeholder="CPF *" name="cpf" id="cpf" v-mask="['###.###.###-##']" v-model="cpf"  @blur="getPersonByCPF($event.target.value)" @keyup.enter="$event.target.blur()">
                </div>

                <div class="col-md-8 max-mb-30">
                    <input type="text" placeholder="Nome *" name="nome" id="nome" v-model="nome">
                </div>
                <div class="pb-3"><hr class="border border-success"/></div>
                <h4 class="col-md-12 text-primary pb-3 fs-5">Endereço</h4>
                <div class="col-md-4 max-mb-30">
                    <input type="text" placeholder="CEP *" name="cep" id="cep" v-mask="['#####-###']" v-model="cep" @blur="getAddressByCep($event.target.value)" @keydown.enter="$event.target.blur()">
                </div>
                <div class="col-md-3 max-mb-30">
                    <select name="uf" placeholder="Selecione um uf" id="uf" v-model="uf" :class="{place: !uf}">
                        <option value="" disabled selected hidden>UF *</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">AM</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                    </select>
                </div>
                <div class="col-md-5 max-mb-30">
                    <input type="cidade" placeholder="Cidade *" name="cidade" id="cidade" v-model="cidade">
                </div>
                <div class="col-md-8 max-mb-30">
                    <input type="text" placeholder="Endereço *" name="endereco" id="endereco" v-model="endereco">
                </div>
                <div class="col-md-4 max-mb-30">
                    <input type="text" placeholder="Nº *" name="numero" id="numero" v-model="numero">
                </div>
                <div class="col-md-6 max-mb-30">
                    <input type="text" placeholder="Complemento" name="complemento" id="complemento" v-model="complemento">
                </div>
                <div class="col-md-6 max-mb-30">
                    <input type="text" placeholder="Bairro *" name="bairro" id="bairro" v-model="bairro">
                </div>
                <div class="pb-3"><hr class="border border-success"/></div>
                <h4 class="col-md-12 text-primary pb-3 fs-5">Contato</h4>
                <div class="col-md-6 max-mb-30">
                    <input type="tel" placeholder="Telefone *" name="telefone" id="telefone" v-mask="['(##) ####-####', '(##) #####-####']" v-model="telefone">
                </div>
                <div class="col-md-6 max-mb-30">
                    <input type="tel" placeholder="WhatsApp *" name="whatsapp" id="whatsapp" v-mask="['(##) ####-####', '(##) #####-####']" v-model="whatsapp">
                </div>
                <div class="col-md-6 max-mb-30">
                    <input type="email" placeholder="E-mail *" name="email" id="email" v-model="email">
                </div>
                <div class="col-md-6 max-mb-30">
                    <input type="text" placeholder="Website" name="website" id="website" v-model="website">
                </div>
                <div class="pb-3"><hr class="border border-success"/></div>
                <h4 class="col-md-12 text-primary pb-3 fs-5">Dados do usuário administrador</h4>
                <div class="col-md-6 max-mb-30">
                    <input type="text" placeholder="Nome do usuário *" name="usuario" id="usuario" v-model="usuario">
                </div>
                <div class="col-md-6 max-mb-30">
                    <input type="email" placeholder="Email do usuário *" name="emailUsuario" id="emailUsuario" v-model="emailUsuario">
                </div>
                <div class="pb-3"><hr class="border border-success"/></div>
                
                
                <div class="d-flex flex-wrap px-4 px-md-0 mb-5 mb-md-0">

                    <h4 class="col-12 col-md-6 text-primary pb-1 fs-5 order-1">Logomarca</h4>

                    <div class="col-12 col-md-6 pb-1 fs-7 order-3 order-md-2">Exemplo:</div>
                    
                    <div class=" col-12 col-md-6 max-mb-30 order-2 order-md-3">
                        <span class="d-block fs-6 fw-normal text-secundary">Utilize imagens com o mesmo padrão do Portal SUB100. Deve ser no formato PNG, SVG ou JPG, de preferência que tenha o fundo transparente. O tamanho recomendado é de <span class="fw-bold text-primary">640 x 480 pixels</span>.</span>
                    </div>

                    <div class=" col-12 col-md-6 order-4">
                        <div class="border border-1 text-center"><img format="webp" src="/images/sub100/logomarca.png?55202204555504" width="281" height="195" alt="logomarca-para-o-crm" title="Anexa a logomarca da sua empresa ou negócio"/></div>
                    </div> 

                </div>

                <div role="alert" class="alert alert-primary col-12">
                    <label for="file" class="form-label mb-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square me-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg> Deseja enviar a sua marca? Sua experiência será mais realista</label>
                    <input type="file" class="form-control-file w-100 border border-info" name="anexo" id="anexo" ref="file">
                </div>
                <div class="pb-3"><hr class="border border-success"/></div>
                <div class="col-12 max-mb-30">
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
    #pessoa, #tipo, #uf{height: 52px;}
    hr.hr, hr.vr {
        border-top: none!important;
    }
    hr {
        margin: 1rem 0;
        color: inherit;
        border: 0;
        border-top: 1px solid;
        opacity: .25;
    }
</style>
<script> 
import {mask} from 'vue-the-mask'
import axios from 'axios'
import { cpf, cnpj } from 'cpf-cnpj-validator'; 

export default {
        directives: {mask},
        data() {
            return{
                pessoaInput: "Jurídica",
                errors: [],
                tipo: "",
                pessoa: "",
                cnpj: null,
                cpf:null,
                nome: null,
                cep: null,
                email: null,
                uf: "",
                cidade: null,
                bairro: null,
                endereco: null,
                complemento: null,
                numero: null,
                telefone: null,
                whatsapp: null,
                email: null,
                website: null,
                usuario: null,
                emailUsuario: null,
                formFileMultiple: null,
                aceito: false,
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
            async getPersonByCPF(){
                await this.$nextTick();
                if(!cpf.isValid(this.cpf)){
                        this.$swal({
                        icon: 'error',
                        text: 'CPF inválido ou não localizado!',
                });
                }
            },

            async getPersonByCNPJ(){
                await this.$nextTick();
                if(!cnpj.isValid(this.cnpj)){
                        this.$swal({
                        icon: 'error',
                        text: 'CNPJ inválido ou não localizado!',
                });
                }
            },

            async getAddressByCep(cep) {
            
                if (!cep || cep === '' || cep.length < 9) {
                return;
            }
            return await axios.get(`https://buscacep.sub100.com.br/api/v1?formato=json&cep=${cep}`)
                .then(response => {
                    if (response.data.resultado) {
                        this.uf = response.data.uf;
                        this.cidade = response.data.cidade;
                        this.endereco = response.data.endereco;
                        this.bairro = response.data.bairro;
                    }
                })
            .catch(error => {
                    this.$swal({
                    icon: 'error',
                    text: 'CEP inválido ou não localizado!',
                    });
                }).finally(() => {
                    //this.loading = false;
                    //this.obrigado = true;
                })
            },           

            async getPersonByPessoa(tipo) {
              this.pessoaInput = tipo;
            },
           /*
            async getPersonByCNPJ() {
                if(!this.cnpj) {
                    return;
                }
                const cnpj = this.cnpj.replace(/[^a-zA-Z0-9]/g, "");
                    if (!this.cnpj || this.pessoa === 'Física' || cnpj.length < 14) {
                    return;
                }
                this.$nuxt.$loading.start();
                await axios.get(`https://busca-cnpj.sub100.com.br/?cnpj=${cnpj}`).then(async response => {
                    if (response.status !== 'OK') {
                        this.$swal({
                        icon: 'error',
                        text: 'CNPJ inválido ou não localizado!',
                        });

                        this.nome = null;
                        //this.payload.fantasy_name = null;

                        return;
                    }
                    this.nome = response.nome;
                    // this.payload.fantasy_name = response.fantasia;

                    this.$nextTick(() => {
                        this.uf = response.uf;
                            this.cep = response.cep.replace('.', ''),
                            this.cidade = response.municipio;
                            this.endereco = response.logradouro;
                            this.numero = response.numero,
                            this.complemento = response.complemento,
                            this.bairro = response.bairro;
                    })

                });
            },  
            */

            checkForm: async function (e) {
                e.preventDefault();
                try {
                    
                    this.errors = [];
                    if (!this.tipo) {
                        this.errors.push('Tipo');
                    }
                    if (!this.pessoa) {
                        this.errors.push('Pessoa');
                    }
                    if ((!this.cpf || !cpf.isValid(this.cpf)) && this.pessoa == 'Física') {
                        this.errors.push('CPF');
                    }
                    if ((!this.cnpj || !cnpj.isValid(this.cnpj)) && this.pessoa == 'Jurídica') {
                        this.errors.push('CNPJ');
                    }
                    if (!this.nome) {
                        this.errors.push('Nome');
                    }
                    if (!this.cep) {
                        this.errors.push('cep');
                    }
                    if (!this.uf) {
                        this.errors.push('UF');
                    }
                    if (!this.cidade) {
                        this.errors.push('cidade');
                    }
                    if (!this.endereco) {
                        this.errors.push('endereco');
                    }
                    if (!this.numero) {
                        this.errors.push('Número');
                    }
                    if (!this.bairro) {
                        this.errors.push('Bairro');
                    }
                    if (!this.telefone) {
                        this.errors.push('Telefone');
                    }
                    if (!this.whatsapp) {
                        this.errors.push('Whatsapp');
                    }
                    if (!this.email) {
                        this.errors.push('E-mail');
                    }
                    if (!this.usuario) {
                        this.errors.push('Nome do usuário');
                    }
                    if (!this.emailUsuario) {
                        this.errors.push('E-mail do usuário');
                    }
                    if (!this.aceito) {
                        this.errors.push('Aceito');
                    }
                    if (!this.errors.length) {
                        this.loading = true;
                        const file = this.$refs.file.files[0];
                        let web, compl;
                        if (!this.website) {
                            web = "true";
                        } else {
                            web = this.website;
                        }
                        if (!this.complemento) {
                            compl = "true";
                        } else {
                            compl = this.complemento;
                        }

                        const token = await this.$recaptcha.execute('login')
                        console.log('ReCaptcha token:', token)

                        let formData = new FormData();
                        formData.append('token', token);
                        formData.append('anexo', file);
                        formData.append('tipo_mail', "Solicite um teste grátis por 30 dias"),
                        formData.append('site', "SUB100 Imobiliárias"),
                        formData.append('tipo', this.tipo);
                        formData.append('pessoa', this.pessoa);
                        formData.append('cnpj', this.cnpj);
                        formData.append('cpf', this.cpf);
                        formData.append('nome', this.nome);
                        formData.append('cep', this.cep);
                        formData.append('uf', this.uf);
                        formData.append('cidade', this.cidade);
                        formData.append('endereco', this.endereco);
                        formData.append('numero', this.numero);
                        formData.append('complemento', compl);
                        formData.append('bairro', this.bairro);
                        formData.append('telefone', this.telefone);
                        formData.append('whatsapp', this.whatsapp);
                        formData.append('email', this.email);
                        formData.append('website', web);
                        formData.append('usuario', this.usuario);
                        formData.append('emailUsuario', this.emailUsuario);
                        formData.append('aceito', this.aceito);
                        await axios.post('https://email.sub100.com.br/sub100sistemas/formTeste.php', formData,{
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
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