# installation



# nuxt env variables

Create a `.env` file in the root directory and add your environment variables:

```env
NUXT_PUBLIC_API_BASE_URL=https://api.example.com
PRIVATE_API_KEY=your_private_key_here
```

In Nuxt, environment variables are typically read and utilized through the 
runtimeConfig object, which is accessed using the useRuntimeConfig composable in Nuxt 3.

Variables intended for client-side exposure should be prefixed with NUXT_PUBLIC_.
Variables without this prefix are considered private and are only accessible server-side.



