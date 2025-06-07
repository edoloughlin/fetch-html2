export default {
	async fetch(request: Request): Promise<Response> {
		const url = new URL(request.url);
  		const l = url.searchParams.get('l');
		if(l) {
			const remote = "https://www.lobbying.ie/return/"+l;
			return await fetch(remote, request);
		}
		return new Response(null, { status: 204 }); // 204 No Content is very "light"
	},
};
