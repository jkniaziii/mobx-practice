import { getParent, types } from "mobx-state-tree";

const Items = types
.model('items', {
    quantity: types.number,
    price: types.number,
    name: types.string,
}).actions((self)=>({
    increment(){
         self.quantity = self.quantity + 1;
    },
    decrement(){
        self.quantity = self.quantity - 1;
   },
   remove(){
       getParent(self, 2).removes(self);
   }
}))
.views(self=>({
    total(){
        return self.quantity * self.price
    }
})

)

export default Items;