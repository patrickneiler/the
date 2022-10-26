const contentfulManagement = require("contentful-management");
const token = "CFPAT-GSoFvx_gR_n5yuImGdEgb3-hhyeCHINaJD-kSgBbTys";
const space = "6nydsfxb5lt0";
module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: token,
  })

  return contentfulClient
    .getSpace(space)
    .then(space => space.getEnvironment("master"))
}