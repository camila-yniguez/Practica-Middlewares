module.exports = {
    index: (req, res) => {
        return res.render( 'index')
    },
    services: (req, res) => {
        return res.render( 'services')
    },
    design: (req, res) => {
        return res.render( 'design')
    },
   admin: (req, res)=>{
    res.redirect("/")
   }
}