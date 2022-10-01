<template>
  <PageContent :headerTitle="$t('contact')">
    <div class="d-flex justify-content-center">
      <section class="section section-lg pt-lg-0 section-contact-us">
        <div class="container">
          <div class="row justify-content-center mt-3 ml-md-4">
            <div class="col-lg-9">
              <BaseCard gradient="secondary" shadow body-classes="p-lg-5">
                <h4 class="mb-1">Do you have a suggestion for us?</h4>
                <p class="mt-0">Your feedback is very important to us.</p>
                <BaseInput class="mt-5" alternative placeholder="Your name" addon-left-icon="ni ni-user-run">
                </BaseInput>
                <BaseInput alternative placeholder="Email address" addon-left-icon="ni ni-email-83"> </BaseInput>
                <BaseInput class="mb-4">
                  <textarea
                    class="form-control form-control-alternative"
                    name="name"
                    rows="4"
                    cols="80"
                    placeholder="Type a message..."
                  ></textarea>
                </BaseInput>
                <BaseButton type="default" round block size="lg"> Send Message </BaseButton>
              </BaseCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  </PageContent>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
