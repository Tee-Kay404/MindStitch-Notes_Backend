'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-9c48e259b8041f815c5ec65e18451ab6e9ac9cf5ec33d848e6e06dc8a2728ef148b6ec9509dc29b079c9f1f7fc588d1b0cb21bd8c7d27a36fc920d133ad526ba"' : 'data-bs-target="#xs-controllers-links-module-AppModule-9c48e259b8041f815c5ec65e18451ab6e9ac9cf5ec33d848e6e06dc8a2728ef148b6ec9509dc29b079c9f1f7fc588d1b0cb21bd8c7d27a36fc920d133ad526ba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9c48e259b8041f815c5ec65e18451ab6e9ac9cf5ec33d848e6e06dc8a2728ef148b6ec9509dc29b079c9f1f7fc588d1b0cb21bd8c7d27a36fc920d133ad526ba"' :
                                            'id="xs-controllers-links-module-AppModule-9c48e259b8041f815c5ec65e18451ab6e9ac9cf5ec33d848e6e06dc8a2728ef148b6ec9509dc29b079c9f1f7fc588d1b0cb21bd8c7d27a36fc920d133ad526ba"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-9c48e259b8041f815c5ec65e18451ab6e9ac9cf5ec33d848e6e06dc8a2728ef148b6ec9509dc29b079c9f1f7fc588d1b0cb21bd8c7d27a36fc920d133ad526ba"' : 'data-bs-target="#xs-injectables-links-module-AppModule-9c48e259b8041f815c5ec65e18451ab6e9ac9cf5ec33d848e6e06dc8a2728ef148b6ec9509dc29b079c9f1f7fc588d1b0cb21bd8c7d27a36fc920d133ad526ba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9c48e259b8041f815c5ec65e18451ab6e9ac9cf5ec33d848e6e06dc8a2728ef148b6ec9509dc29b079c9f1f7fc588d1b0cb21bd8c7d27a36fc920d133ad526ba"' :
                                        'id="xs-injectables-links-module-AppModule-9c48e259b8041f815c5ec65e18451ab6e9ac9cf5ec33d848e6e06dc8a2728ef148b6ec9509dc29b079c9f1f7fc588d1b0cb21bd8c7d27a36fc920d133ad526ba"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' :
                                            'id="xs-controllers-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' :
                                        'id="xs-injectables-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-34f848e9fd4b5b944c8d9f4e6edc79764a4e24da037f72759268ef84fe434ae3bb36b495e6e1cbf44e3f0acd89589692c2d773052d5191533c22e0778ae60da5"' : 'data-bs-target="#xs-controllers-links-module-PostModule-34f848e9fd4b5b944c8d9f4e6edc79764a4e24da037f72759268ef84fe434ae3bb36b495e6e1cbf44e3f0acd89589692c2d773052d5191533c22e0778ae60da5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-34f848e9fd4b5b944c8d9f4e6edc79764a4e24da037f72759268ef84fe434ae3bb36b495e6e1cbf44e3f0acd89589692c2d773052d5191533c22e0778ae60da5"' :
                                            'id="xs-controllers-links-module-PostModule-34f848e9fd4b5b944c8d9f4e6edc79764a4e24da037f72759268ef84fe434ae3bb36b495e6e1cbf44e3f0acd89589692c2d773052d5191533c22e0778ae60da5"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-34f848e9fd4b5b944c8d9f4e6edc79764a4e24da037f72759268ef84fe434ae3bb36b495e6e1cbf44e3f0acd89589692c2d773052d5191533c22e0778ae60da5"' : 'data-bs-target="#xs-injectables-links-module-PostModule-34f848e9fd4b5b944c8d9f4e6edc79764a4e24da037f72759268ef84fe434ae3bb36b495e6e1cbf44e3f0acd89589692c2d773052d5191533c22e0778ae60da5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-34f848e9fd4b5b944c8d9f4e6edc79764a4e24da037f72759268ef84fe434ae3bb36b495e6e1cbf44e3f0acd89589692c2d773052d5191533c22e0778ae60da5"' :
                                        'id="xs-injectables-links-module-PostModule-34f848e9fd4b5b944c8d9f4e6edc79764a4e24da037f72759268ef84fe434ae3bb36b495e6e1cbf44e3f0acd89589692c2d773052d5191533c22e0778ae60da5"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-409b3dac8b628df99108aee58c63b149e5777113ab7f2e18890ba9f1a584c13def529d0dee616bb4faac9559d467175aa25c1cb259fa15c4b2ee23b3b06e3917"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-409b3dac8b628df99108aee58c63b149e5777113ab7f2e18890ba9f1a584c13def529d0dee616bb4faac9559d467175aa25c1cb259fa15c4b2ee23b3b06e3917"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-409b3dac8b628df99108aee58c63b149e5777113ab7f2e18890ba9f1a584c13def529d0dee616bb4faac9559d467175aa25c1cb259fa15c4b2ee23b3b06e3917"' :
                                            'id="xs-controllers-links-module-UsersModule-409b3dac8b628df99108aee58c63b149e5777113ab7f2e18890ba9f1a584c13def529d0dee616bb4faac9559d467175aa25c1cb259fa15c4b2ee23b3b06e3917"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-409b3dac8b628df99108aee58c63b149e5777113ab7f2e18890ba9f1a584c13def529d0dee616bb4faac9559d467175aa25c1cb259fa15c4b2ee23b3b06e3917"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-409b3dac8b628df99108aee58c63b149e5777113ab7f2e18890ba9f1a584c13def529d0dee616bb4faac9559d467175aa25c1cb259fa15c4b2ee23b3b06e3917"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-409b3dac8b628df99108aee58c63b149e5777113ab7f2e18890ba9f1a584c13def529d0dee616bb4faac9559d467175aa25c1cb259fa15c4b2ee23b3b06e3917"' :
                                        'id="xs-injectables-links-module-UsersModule-409b3dac8b628df99108aee58c63b149e5777113ab7f2e18890ba9f1a584c13def529d0dee616bb4faac9559d467175aa25c1cb259fa15c4b2ee23b3b06e3917"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostsDto.html" data-type="entity-link" >PatchPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});