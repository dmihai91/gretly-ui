<template>
	<header class="header-global">
		<BaseNav class="navbar-main" transparent type="" effect="light" expand>
			<NuxtLink slot="brand" class="navbar-brand mr-lg-5" to="/">
				<img src="img/brand/white.png" alt="logo" />
			</NuxtLink>
			<div class="row" slot="content-header" slot-scope="{ closeMenu }">
				<div class="col-6 collapse-brand">
					<a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
						<img src="img/brand/blue.png" />
					</a>
				</div>
				<div class="col-6 collapse-close">
					<BaseCloseButton @click="closeMenu"></BaseCloseButton>
				</div>
			</div>

			<ul class="navbar-nav navbar-nav-hover align-items-lg-center">
				<li class="nav-item">
					<NuxtLink to="/web-apps-builder" class="nav-link d-lg-none">Webapps builder</NuxtLink>
					<NuxtLink to="/web-apps-builder" class="d-none nav-link d-lg-block">Webapps builder</NuxtLink>
				</li>
				<BaseDropdown class="nav-item" menu-classes="dropdown-menu-xl">
					<a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
						<i class="ni ni-ui-04 d-lg-none"></i>
						<span class="nav-link-inner--text">{{ $t('explore') }}</span>
					</a>
					<div class="dropdown-menu-inner">
						<NuxtLink to="/templates" class="media d-flex align-items-center">
							<div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
								<i class="ni ni-spaceship"></i>
							</div>
							<div class="media-body ml-3">
								<h6 class="heading text-primary mb-md-1">Templates</h6>
								<p class="description d-none d-md-inline-block mb-0">
									Get started with Bootstrap, the world's most popular framework for building responsive sites.
								</p>
							</div>
						</NuxtLink>
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
				</BaseDropdown>
				<BaseDropdown tag="li" class="nav-item" menu-classes="dropdown-menu-xl">
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
				</BaseDropdown>
			</ul>
			<ul class="navbar-nav align-items-lg-center ml-lg-auto">
				<li class="nav-item">
					<NuxtLink to="/login" class="nav-link d-lg-none font-weight-bold">{{ $t('sign_in') }}</NuxtLink>
					<NuxtLink to="/login" class="d-none btn btn-secondary text-dark nav-link d-lg-block font-weight-bold">{{
						$t('sign_in')
					}}</NuxtLink>
				</li>
				<li class="nav-item">
					<NuxtLink to="/register" class="nav-link d-lg-none font-weight-bold">{{ $t('get_started') }}</NuxtLink>
					<NuxtLink to="/register" class="d-none btn btn-warning nav-link d-lg-block font-weight-bold">{{
						$t('get_started')
					}}</NuxtLink>
				</li>
			</ul>
		</BaseNav>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	components: {}
});
</script>

<style></style>
