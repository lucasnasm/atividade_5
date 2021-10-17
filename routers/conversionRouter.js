const { convert } = require("../helpers/convertCurrency")

module.exports = {
    conversion: async(req, res) => {
        try {

            const valor = parseInt(req.params?.valor_real)
            
            let conversion = await convert(valor)
            
            res.status(200).json({
                from: conversion.query.from,
                to: conversion.query.to,
                brl: conversion.query.amount.toFixed(2),
                usd: conversion.result.toFixed(2),
                raw_brl: conversion.query.amount,
                raw_usd: conversion.result
            })

        } catch (error) {
            res.status(501).json("teste")    
        }
    }
}