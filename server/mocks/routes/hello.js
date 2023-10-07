module.exports = [
  {
    id: "hello",
    url: "/api/hello",
    method: "GET",
    variants: [
      {
        id: "success",
        type: "text",
        options: {
          status: 200,
          body: "Hello, Mocks Server!"
        }
      }
    ]
  }
];
