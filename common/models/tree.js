module.exports = function(Tree) {
    Tree.disableRemoteMethod("upsert", true);
    Tree.disableRemoteMethod("updateAll", true);
    Tree.disableRemoteMethod("updateAttributes", false);

    Tree.disableRemoteMethod("deleteById", true);

    Tree.disableRemoteMethod("confirm", true);
    
    Tree.disableRemoteMethod("createChangeStream",true);
    
    Tree.disableRemoteMethod("replaceOrCreate",true);
    
    Tree.disableRemoteMethod("upsertWithWhere",true);
};
