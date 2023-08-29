<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Rock Solid</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="normal"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Why choose Apollux
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Apollux is a modern, clean and fully responsive Nuxt / Tailwind CSS
          dashboard system. It is built with care and provides a solid
          foundation for your next project, while yielding an exquisite
          developer experience.
        </BaseParagraph>
      </div>
      <div class="mb-10 grid gap-y-16 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16">
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="normal"
            class="mb-3"
          >
            User Experience
          </BaseHeading>
          <div class="space-y-4">
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              We understand the importance of creating a dashboard that not only
              looks great but is also easy to use and accessible for everyone.
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              That's why our team has put in countless hours of work, paying
              close attention to every detail, to ensure that Apollux delivers a
              seamless user experience. From the color schemes to the
              typography, every aspect has been carefully crafted to make sure
              it is pleasing to the eye and easy to navigate.
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              Accessibility has also been made a top priority, ensuring that our
              dashboard is accessible to all users, regardless of their
              abilities. We have implemented features such as keyboard
              navigation and focus rings.
            </BaseParagraph>
          </div>
        </div>
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="normal"
            class="mb-3"
          >
            Developer Experience
          </BaseHeading>
          <div class="space-y-4">
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              We get that creating a dashboard is not just about the end-users
              but also about the developers who build it. That's why we have put
              a lot of effort into making the developer experience as smooth and
              efficient as possible.
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              We have chosen tools that developers love, such as Visual Studio
              Code, and optimized Apollux for the best possible experience.We
              have integrated plugins like Vue Language Features, Nuxt Component
              Meta, and Nuxt Dev Tools, which enable developers to easily create
              and manage their projects.
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              Apollux supports Typescript and implements features like props
              autocompletion, which helps developers avoid typing errors and
              increase their productivity. To make it even more customizable, we
              have made extensible configuration files.
            </BaseParagraph>
          </div>
        </div>
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="normal"
            class="mb-3"
          >
            Nuxt powered
          </BaseHeading>
          <div class="space-y-4">
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              Apollux combines the power of the latest version of Nuxt with the
              popular Tailwind CSS framework, allowing you to create stunning
              designs with ease.
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              With Nuxt, you get a fast and efficient web development framework
              that is perfect for building complex applications. Its modular
              architecture and easy-to-use syntax make it an ideal choice for
              developers of all skill levels.
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              With Nuxt, you can take advantage of built-in features such as
              server-side rendering, static site generation, and automatic code
              splitting. This means your dashboard will be lightning-fast,
              SEO-friendly, and easy to maintain.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/img/illustrations/people.svg"
          width="768"
          height="432"
          alt="placeholder-image"
          class="mx-auto mb-6 max-w-3xl dark:brightness-50 dark:hue-rotate-60 dark:invert dark:saturate-50"
          loading="lazy"
          decoding="async"
        />
        <div class="mx-auto mb-3 max-w-md text-center">
          <BaseHeading
            as="h3"
            size="xl"
            weight="light"
            lead="normal"
            class="text-muted-800 mb-1 dark:text-white"
          >
            Get Apollux now
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-100">
            Want to build a banking or a financial app seamlessly? Start
            building your next project with Apollux today.
          </BaseParagraph>
        </div>
        <div class="my-2 flex justify-center gap-2">
          <BaseButton
            color="primary"
            shape="full"
            shadow="hover"
            class="!h-11 w-48"
            to="https://go.cssninja.io/buy-apollux"
          >
            <Icon name="cib:envato" class="h-4 w-4" />
            <span>Purchase Apollux</span>
          </BaseButton>
        </div>
        <div>
          <BaseParagraph size="sm" class="text-muted-400 text-center">
            Made by
            <NuxtLink
              class="hover:text-primary-500 underline-offset-4 transition-colors duration-200 hover:underline"
              to="https://cssninja.io"
              >cssninja.io</NuxtLink
            >
          </BaseParagraph>
        </div>
      </div>
    </div>
  </div>
</template>
