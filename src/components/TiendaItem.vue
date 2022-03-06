<template>
  <div class="shop">
    <div class="container">



      <div class="row">
        <div class="col col-sm-12 col-md-8">
          <h2>Lista de items</h2>

          <div class="row justify-content-center">
            <div
              class="item col-sm-3 m-2"
              v-for="item in items"
              :key="item"
            >
              <h4 class="text-start">{{ item.nombre }}</h4>

              <p class="text-start">
                <b>Descripción:</b> <span>{{ item.descripcion }}</span>
              </p>

              <p class="text-start">
                <b>Precio:</b> <span>{{ item.precio }} $</span>
              </p>

              <button class="btn btn-primary" @click="itemInsercion(item)">Comprar</button>
            </div>
          </div>
        </div>

        <div class="col col-sm-12 col-md-4">
          <h4>Carrito</h4>

          <div class="carrito">
            <div v-if="carrito.length">
              <table>
                <thead>
                  <tr>
                    <th>Cantidad</th>
                    <th>item</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="item in carrito" :key="item.id">
                    <td>{{ item.cantidad }}</td>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.precio }} $</td>
                    <td>{{ item.descripcion }}</td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="eliminaritem(item)"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div>
                <p>Suma Total: {{ suma.precioTotal }} $</p>
              </div>
            </div>

            <div v-else>
              <p>El carrito está vacío</p>
            </div>


          </div>
        </div>
      </div>
    </div>
    <footerItem />
  </div>
</template>

<script>
import footerItem from "@/components/footerItem.vue";
export default {
  name: "TiendaItem",
  data() {
    return {
      items: [
        {
          nombre: "Item1",
          precio: 5,
          precioTotal: 0,
          descripcion: "item1",
          cantidad: 1,
          id: 1,
        },
        {
          nombre: "Item2",
          precio: 9,
          precioTotal: 0,
          descripcion: "item2",
          cantidad: 1,
          id: 2,
        },
        {
          nombre: "Item3",
          precio: 11,
          precioTotal: 0,
          descripcion: "item3",
          cantidad: 1,
          id: 3,
        },
        {
          nombre: "Item4",
          precio: 7,
          precioTotal: 0,
          descripcion: "item 4",
          cantidad: 1,
          id: 4,
        },
      ],
      carrito: [],
      sumaTotal: [],
      suma: 0,
    };
  },
  methods: {
    // Inserta item
    itemInsercion(item) {
      const existe = this.carrito.some(
        (itemItem) => item.id === itemItem.id
      );
      if (existe) {
        //Actualizamos la cantidad
        let items = this.carrito.map((itemItem) => {
          if (item.id === itemItem.id) {
            item.cantidad++;
            return item; // Devuelve el objeto actualizado
          } else {
            return itemItem; // Devuelve los objetos que no están duplicados
          }
        });
        this.carrito = [...items];
      } else {
        this.carrito = [...this.carrito, item];
      }
      this.sumarTotal();
    },
    // Suma item
    sumarTotal() {
      this.carrito.forEach((item) => {
        item.precioTotal = item.precio * item.cantidad;
      });
      this.items.forEach((item) => {
        this.suma = this.items.reduce((a, b) => ({
          precioTotal: a.precioTotal + b.precioTotal,
        }));
      });
    },
    // Eliminar item
    eliminaritem(item) {
      if (item.cantidad > 1) {
        item.cantidad -= 1;
        item.precioTotal -= item.precio;
        this.sumarTotal();
      } else {
        if (item.precioTotal !== 0) {
          item.precioTotal = 0;
        }
        this.carrito = this.carrito.filter(
          (itemItem) => item.id !== itemItem.id
        );
        this.sumarTotal();
      }
    },
    // Más funciones
  },
  components: {
    footerItem,
  },
};
</script>