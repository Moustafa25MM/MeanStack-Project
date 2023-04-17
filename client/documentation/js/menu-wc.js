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
                    <a href="index.html" data-type="index-link">client documentation</a>
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-bcc5283ebb69135e288e75f16b94e9bdace0952ef6c66c42d1275d65d12fdb4547393712070c851d51cf4b2e3ea63f6bc1d44629f7ada5a5bfad4190abce7ecf"' : 'data-target="#xs-components-links-module-AdminModule-bcc5283ebb69135e288e75f16b94e9bdace0952ef6c66c42d1275d65d12fdb4547393712070c851d51cf4b2e3ea63f6bc1d44629f7ada5a5bfad4190abce7ecf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-bcc5283ebb69135e288e75f16b94e9bdace0952ef6c66c42d1275d65d12fdb4547393712070c851d51cf4b2e3ea63f6bc1d44629f7ada5a5bfad4190abce7ecf"' :
                                            'id="xs-components-links-module-AdminModule-bcc5283ebb69135e288e75f16b94e9bdace0952ef6c66c42d1275d65d12fdb4547393712070c851d51cf4b2e3ea63f6bc1d44629f7ada5a5bfad4190abce7ecf"' }>
                                            <li class="link">
                                                <a href="components/AdminAuthorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminAuthorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminBooksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminBooksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminCategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminCategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b97d4cf1e19165b2d941b3d3a606a1d711bbf3c9481ac695b71698852ee25e59b0b2889904107dcb7a4133ebd2f3397163f6bcce9a0ffdfaadca3445297f81d7"' : 'data-target="#xs-components-links-module-AppModule-b97d4cf1e19165b2d941b3d3a606a1d711bbf3c9481ac695b71698852ee25e59b0b2889904107dcb7a4133ebd2f3397163f6bcce9a0ffdfaadca3445297f81d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b97d4cf1e19165b2d941b3d3a606a1d711bbf3c9481ac695b71698852ee25e59b0b2889904107dcb7a4133ebd2f3397163f6bcce9a0ffdfaadca3445297f81d7"' :
                                            'id="xs-components-links-module-AppModule-b97d4cf1e19165b2d941b3d3a606a1d711bbf3c9481ac695b71698852ee25e59b0b2889904107dcb7a4133ebd2f3397163f6bcce9a0ffdfaadca3445297f81d7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-445ac2266f93e9b566846191865881fd38c8255c23a23b3736d63996a78fc7101d6460dd8e98ff54a43f35719f031d04239936238dc4d94a0e213ee89fe1eb1b"' : 'data-target="#xs-components-links-module-UserModule-445ac2266f93e9b566846191865881fd38c8255c23a23b3736d63996a78fc7101d6460dd8e98ff54a43f35719f031d04239936238dc4d94a0e213ee89fe1eb1b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-445ac2266f93e9b566846191865881fd38c8255c23a23b3736d63996a78fc7101d6460dd8e98ff54a43f35719f031d04239936238dc4d94a0e213ee89fe1eb1b"' :
                                            'id="xs-components-links-module-UserModule-445ac2266f93e9b566846191865881fd38c8255c23a23b3736d63996a78fc7101d6460dd8e98ff54a43f35719f031d04239936238dc4d94a0e213ee89fe1eb1b"' }>
                                            <li class="link">
                                                <a href="components/AboutusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthorDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BooksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShelveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShelveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShelveMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShelveMainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShelveSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShelveSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SingleBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SingleBookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/NavbarComponent-1.html" data-type="entity-link" >NavbarComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthorsService.html" data-type="entity-link" >AuthorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthorsService-1.html" data-type="entity-link" >AuthorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService-1.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BooksService.html" data-type="entity-link" >BooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BooksService-1.html" data-type="entity-link" >BooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService-1.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/IsGuardGuard.html" data-type="entity-link" >IsGuardGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Admin.html" data-type="entity-link" >Admin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Author.html" data-type="entity-link" >Author</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Book-1.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});