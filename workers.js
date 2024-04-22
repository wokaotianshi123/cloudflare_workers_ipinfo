export default {

  async fetch(request) {

    const body = `

    <!DOCTYPE html>

<html>

<head>

<meta charset='UTF-8'>

<title>my ip info</title>



</head>

<body>

${request.headers.get("X-Real-IP")}

</body>

    `

    const newResponse = new Response(body, {

      headers: {

        "content-type": "text/html;charset=UTF-8",

      },

    });

    return newResponse;

  },

};
