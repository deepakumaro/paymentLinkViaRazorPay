exports.createUniqueId = (length) => {
    try {
        let refId = Date.now().toString(36) + Math.random().toString(length).substr(2);
        return {"status":"0","refId":refId}
    } catch (error) {
        return {"status":"1","error":"Can not generate Ref Id"}
    }
}