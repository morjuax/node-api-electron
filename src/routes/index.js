const {Router} = require('express');

const router = Router();

router.post('/initSesion/:id?', (req, res) => res.json(
    {
        "ParamsGet": {
            "erc": 1,
            "ercText": "",
            "Erc": 1,
            "EnBase": 666,
            "puntajeNEC": 666,
            "ErcDesc": "Verificacion exitosa.",
            "NroAudit": "905312901-QA",
            "ASexo": "",
            "FechaVectoNEC": "",
            "NacionalidadNEC": "",
            "RutNEC": "19362163-5",
            "DV": "",
            "SerieNEC": "",
            "ApellidoNEC": "",
            "Nombres": ""
        },
        "signature": "15A8FFAB92DEB351E7E28CF4653AEFE18DDF58AA5BBB6DA605E4DD2F8AA04273B911D90834A8E36621050D5D1890822083FBC631C299F881D9B3F150BF67C1949D00CE2A5564DC4F96DA360F5D4988A675DD00846BC2B78CA9DCBCE6CF21B4FC6B64B176D1B3ADF34AC7555EFF078CBFCD5241E5E7A819091A75C34736FD53EA5545D22E735D4DB14797DE99FA1920D80307988593467445F1587E705F7789D2F2707B6D858354DC13DB60D9EC70BED178F3497063B099BA7CD1983763B29C4C8A13831421E2875DA45DF239A7BE45ADD280D2EF4709DD8615E2061F0C449ED599A8E0C17CB86BCC503533A66EADAE50FFADE54BAD18E94EC3B3D32F69516D67",
        "token": "ttcmhmzz4xd36ovc48gm780fq0ik2a5mtiisnnw2wylc7rb37f9jc7v27xnn"
    }
));

router.post('/closeSesion/:id?', (req, res) => res.json(
    {
        "ParamsGet": {
            "erc": 1,
            "ercText": "",
            "Erc": 1,
            "EnBase": 666,
            "puntajeNEC": 666,
            "ErcDesc": "Verificacion exitosa.",
            "NroAudit": "905312901-QA",
            "ASexo": "",
            "FechaVectoNEC": "",
            "NacionalidadNEC": "",
            "RutNEC": "19362163-5",
            "DV": "",
            "SerieNEC": "",
            "ApellidoNEC": "",
            "Nombres": ""
        },
        "signature": "15A8FFAB92DEB351E7E28CF4653AEFE18DDF58AA5BBB6DA605E4DD2F8AA04273B911D90834A8E36621050D5D1890822083FBC631C299F881D9B3F150BF67C1949D00CE2A5564DC4F96DA360F5D4988A675DD00846BC2B78CA9DCBCE6CF21B4FC6B64B176D1B3ADF34AC7555EFF078CBFCD5241E5E7A819091A75C34736FD53EA5545D22E735D4DB14797DE99FA1920D80307988593467445F1587E705F7789D2F2707B6D858354DC13DB60D9EC70BED178F3497063B099BA7CD1983763B29C4C8A13831421E2875DA45DF239A7BE45ADD280D2EF4709DD8615E2061F0C449ED599A8E0C17CB86BCC503533A66EADAE50FFADE54BAD18E94EC3B3D32F69516D67",
        "token": "ttcmhmzz4xd36ovc48gm780fq0ik2a5mtiisnnw2wylc7rb37f9jc7v27xnn"
    }
));


module.exports = router;
