import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import CardProduct from '../src/components/CardProduct/CardProduct.vue';
import { Heart } from 'lucide-vue-next';
import { createPinia, setActivePinia } from 'pinia';
import { useProductStore } from '../src/stores/productStore';
import { Product } from '../src/interfaces';

describe('CardProduct', () => {
  let productStore: ReturnType<typeof useProductStore>;
  let product: Product;

  beforeEach(() => {
    setActivePinia(createPinia());

    productStore = useProductStore();
    productStore.toggleWishlist = vi.fn((code: string) => {
      if (productStore.wishlist.includes(code)) {
        productStore.wishlist = productStore.wishlist.filter(
          (item) => item !== code,
        );
      } else {
        productStore.wishlist.push(code);
      }
    });

    product = {
      code: 'D22-2077-006',
      name: 'Tênis Nike Revolution 7 Feminino - Preto+Branco',
      available: true,
      visible: true,
      details: {
        name: 'Tênis Nike Revolution 7 Feminino - Preto+Branco',
        description:
          'Carregamos o Revolution 7 com o tipo de amortecimento e suporte macio que pode mudar o seu mundo de corrida. Elegante como sempre, confortvel quando a borracha encontra a estrada e performtico para o ritmo desejado, uma evoluo de um favorito dos fs que oferece uma conduo macia e suave.',
      },
      priceInCents: '39999',
      salePriceInCents: '30399',
      rating: 4.5,
      image:
        'https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x',
      stockAvailable: true,
    };
  });

  it('should add the product to the wishlist when the heart button is clicked', async () => {
    const wrapper = mount(CardProduct, {
      props: {
        product,
      },
      global: {
        components: {
          Heart,
        },
      },
    });

    await wrapper.find('.add-wishlist').trigger('click');

    expect(productStore.wishlist).toContain(product.code);
    expect(wrapper.vm.isInWishlist).toBe(true);
  });

  it('should remove the product from the wishlist when the heart button is clicked again', async () => {
    const wrapper = mount(CardProduct, {
      props: {
        product,
      },
      global: {
        components: {
          Heart,
        },
      },
    });

    productStore.wishlist.push(product.code);

    await wrapper.find('.add-wishlist').trigger('click');

    expect(productStore.wishlist).not.toContain(product.code);
    expect(wrapper.vm.isInWishlist).toBe(false);
  });
});
