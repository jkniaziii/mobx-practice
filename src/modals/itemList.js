import { types } from "mobx-state-tree";
import Items from "./Items";

const ItemList = types.model('itemList', {
    items: types.array(Items)
}).actions(self=>({
    add(item){
        self.items.push(item);
    },
    removes(item){
        self.items.splice(self.items.indexOf(item), 1);
    }
}))
.views(self => ({
    total() {
      return self.items.reduce((sum, item) => sum + item.total(), 0);
    }
  }));


export default ItemList;