<template>
  <header>
    <nav>
      <div class="logo">logo</div>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/catalog">Catalog</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contacts">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>
