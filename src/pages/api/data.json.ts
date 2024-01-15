export const prerender = false;

export async function GET() {
  let number = Math.random();
    return new Response(
      JSON.stringify({
        name: 'Astro',
        message: 'test ssr render function' + number,
        url: 'https://astro.build/'
      })
    )
  }