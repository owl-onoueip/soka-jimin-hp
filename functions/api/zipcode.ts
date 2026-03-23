export const onRequestGet: PagesFunction = async ({ request }) => {
    const url = new URL(request.url);
    const zipcode = url.searchParams.get("zipcode") ?? "";

    const res = await fetch(`https://zipcloud.ibsrv.net/api/search?zipcode=${zipcode}`);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
};
