<template>
	<header class="header-global">
		<base-nav class="navbar-main" transparent type="" effect="light" expand>
			<router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
				<img src="img/brand/white.png" alt="logo" />
			</router-link>
			<div class="row" slot="content-header" slot-scope="{ closeMenu }">
				<div class="col-6 collapse-brand">
					<a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
						<img src="img/brand/blue.png" />
					</a>
				</div>
				<div class="col-6 collapse-close">
					<close-button @click="closeMenu"></close-button>
				</div>
			</div>

			<ul class="navbar-nav navbar-nav-hover align-items-lg-center">
				<li class="nav-item">
					<router-link to="/web-apps-builder" class="nav-link d-lg-none">Webapps builder</router-link>
					<router-link to="/web-apps-builder" class="d-none nav-link d-lg-block">Webapps builder</router-link>
				</li>
				<base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
					<a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
						<i class="ni ni-ui-04 d-lg-none"></i>
						<span class="nav-link-inner--text">{{ $t('explore') }}</span>
					</a>
					<div class="dropdown-menu-inner">
						<router-link to="/templates" class="media d-flex align-items-center">
							<div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
								<i class="ni ni-spaceship"></i>
							</div>
							<div class="media-body ml-3">
								<h6 class="heading text-primary mb-md-1">Templates</h6>
								<p class="description d-none d-md-inline-block mb-0">
									Get started with Bootstrap, the world's most popular framework for building responsive sites.
								</p>
							</div>
						</router-link>
						<a
							href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
							class="media d-flex align-items-center"
						>
							<div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
								<i class="ni ni-ui-04"></i>
							</div>
							<div class="media-body ml-3">
								<h5 class="heading text-warning mb-md-1">Components</h5>
								<p class="description d-none d-md-inline-block mb-0">
									Learn how to use Argon compiling Scss, change brand colors and more.
								</p>
							</div>
						</a>
					</div>
				</base-dropdown>
				<base-dropdown tag="li" class="nav-item" menu-classes="dropdown-menu-xl">
					<a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
						<i class="ni ni-collection d-lg-none"></i>
						<span class="nav-link-inner--text">Resources</span>
					</a>
					<div class="dropdown-menu-inner">
						<a
							href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
							class="media d-flex align-items-center"
						>
							<div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
								<i class="ni ni-spaceship"></i>
							</div>
							<div class="media-body ml-3">
								<h6 class="heading text-primary mb-md-1">Tutorials</h6>
								<p class="description d-none d-md-inline-block mb-0">
									Get started with Bootstrap, the world's most popular framework for building responsive sites.
								</p>
							</div>
						</a>
						<a
							href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
							class="media d-flex align-items-center"
						>
							<div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
								<i class="ni ni-ui-04"></i>
							</div>
							<div class="media-body ml-3">
								<h5 class="heading text-warning mb-md-1">Blog</h5>
								<p class="description d-none d-md-inline-block mb-0">
									Learn how to use Argon compiling Scss, change brand colors and more.
								</p>
							</div>
						</a>
					</div>
				</base-dropdown>
			</ul>
			<ul class="navbar-nav align-items-lg-center ml-lg-auto">
				<li class="nav-item">
					<router-link to="/login" class="nav-link d-lg-none font-weight-bold">{{ $t('sign_in') }}</router-link>
					<router-link to="/login" class="d-none btn btn-secondary text-dark nav-link d-lg-block font-weight-bold">{{
						$t('sign_in')
					}}</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/register" class="nav-link d-lg-none font-weight-bold">{{ $t('get_started') }}</router-link>
					<router-link to="/register" class="d-none btn btn-warning nav-link d-lg-block font-weight-bold">{{
						$t('get_started')
					}}</router-link>
				</li>
			</ul>
		</base-nav>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	components: {}
});
</script>

<style></style>
