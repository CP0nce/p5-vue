"use strict";(self["webpackChunkneodance"]=self["webpackChunkneodance"]||[]).push([[443],{8753:function(t,i,e){e.r(i),e.d(i,{default:function(){return Y}});var o=e(3396);const c={class:"TiendaItem"};function a(t,i,e,a,r,n){const l=(0,o.up)("TiendaItem");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(l)])}var r=e(7139);const n={class:"shop"},l={class:"container"},s={class:"row"},d={class:"col col-sm-12 col-md-8"},m=(0,o._)("h2",null,"Lista de items",-1),u={class:"row justify-content-center"},p={class:"text-start"},_={class:"text-start"},h=(0,o._)("b",null,"Descripción:",-1),T=(0,o.Uk)(),w={class:"text-start"},b=(0,o._)("b",null,"Precio:",-1),v=(0,o.Uk)(),f=["onClick"],k={class:"col col-sm-12 col-md-4"},I=(0,o._)("h4",null,"Carrito",-1),g={class:"carrito"},D={key:0},C=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Cantidad"),(0,o._)("th",null,"item"),(0,o._)("th",null,"Precio"),(0,o._)("th",null,"Descripción")])],-1),z=["onClick"],y={key:1},x=(0,o._)("p",null,"El carrito está vacío",-1),E=[x];function Z(t,i,e,c,a,x){const Z=(0,o.up)("footerItem");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",l,[(0,o._)("div",s,[(0,o._)("div",d,[m,(0,o._)("div",u,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.items,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"item col-sm-3 m-2",key:t},[(0,o._)("h4",p,(0,r.zw)(t.nombre),1),(0,o._)("p",_,[h,T,(0,o._)("span",null,(0,r.zw)(t.descripcion),1)]),(0,o._)("p",w,[b,v,(0,o._)("span",null,(0,r.zw)(t.precio)+" $",1)]),(0,o._)("button",{class:"btn btn-primary",onClick:i=>x.itemInsercion(t)},"Comprar",8,f)])))),128))])]),(0,o._)("div",k,[I,(0,o._)("div",g,[a.carrito.length?((0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("table",null,[C,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.carrito,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("td",null,(0,r.zw)(t.cantidad),1),(0,o._)("td",null,(0,r.zw)(t.nombre),1),(0,o._)("td",null,(0,r.zw)(t.precio)+" $",1),(0,o._)("td",null,(0,r.zw)(t.descripcion),1),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-danger",onClick:i=>x.eliminaritem(t)}," X ",8,z)])])))),128))])]),(0,o._)("div",null,[(0,o._)("p",null,"Suma Total: "+(0,r.zw)(a.suma.precioTotal)+" $",1)])])):((0,o.wg)(),(0,o.iD)("div",y,E))])])])]),(0,o.Wm)(Z)])}var $=e(8194),H={name:"TiendaItem",data(){return{items:[{nombre:"Item1",precio:5,precioTotal:0,descripcion:"item1",cantidad:1,id:1},{nombre:"Item2",precio:9,precioTotal:0,descripcion:"item2",cantidad:1,id:2},{nombre:"Item3",precio:11,precioTotal:0,descripcion:"item3",cantidad:1,id:3},{nombre:"Item4",precio:7,precioTotal:0,descripcion:"item 4",cantidad:1,id:4}],carrito:[],sumaTotal:[],suma:0}},methods:{itemInsercion(t){const i=this.carrito.some((i=>t.id===i.id));if(i){let i=this.carrito.map((i=>t.id===i.id?(t.cantidad++,t):i));this.carrito=[...i]}else this.carrito=[...this.carrito,t];this.sumarTotal()},sumarTotal(){this.carrito.forEach((t=>{t.precioTotal=t.precio*t.cantidad})),this.items.forEach((t=>{this.suma=this.items.reduce(((t,i)=>({precioTotal:t.precioTotal+i.precioTotal})))}))},eliminaritem(t){t.cantidad>1?(t.cantidad-=1,t.precioTotal-=t.precio,this.sumarTotal()):(0!==t.precioTotal&&(t.precioTotal=0),this.carrito=this.carrito.filter((i=>t.id!==i.id)),this.sumarTotal())}},components:{footerItem:$.Z}},K=e(89);const P=(0,K.Z)(H,[["render",Z]]);var S=P,U={name:"ShopView",components:{TiendaItem:S}};const W=(0,K.Z)(U,[["render",a]]);var Y=W}}]);
//# sourceMappingURL=about.26bf4ffa.js.map