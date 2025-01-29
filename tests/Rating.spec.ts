import { mount } from '@vue/test-utils';
import Rating from '../src/components/Rating/Rating.vue';
import { describe, it, expect, vi } from 'vitest';

vi.mock('lucide-vue-next', () => ({
  Star: {
    template: '<div class="mock-star"></div>',
  },
  StarHalf: {
    template: '<div class="mock-star-half"></div>',
  },
}));

describe('Rating', () => {
  it('renderiza o componente corretamente com 4.5 de avaliação', () => {
    const rating = 4.5;

    const wrapper = mount(Rating, {
      props: {
        rating,
      },
    });

    expect(wrapper.find('span').text()).toBe(rating.toString());

    const fullStars = wrapper.findAll('.mock-star');
    expect(fullStars.length).toBe(Math.floor(rating));

    const halfStar = wrapper.find('.mock-star-half');
    expect(halfStar.exists()).toBe(true);
  });

  it('renderiza o componente corretamente com 3 de avaliação (sem meia estrela)', () => {
    const rating = 3;

    const wrapper = mount(Rating, {
      props: {
        rating,
      },
    });

    expect(wrapper.find('span').text()).toBe(rating.toString());

    const fullStars = wrapper.findAll('.mock-star');
    expect(fullStars.length).toBe(Math.floor(rating));

    const halfStar = wrapper.find('.mock-star-half');
    expect(halfStar.exists()).toBe(false);
  });

  it('renderiza o componente corretamente com 0 de avaliação', () => {
    const rating = 0;

    const wrapper = mount(Rating, {
      props: {
        rating,
      },
    });

    expect(wrapper.find('span').text()).toBe(rating.toString());

    const fullStars = wrapper.findAll('.mock-star');
    expect(fullStars.length).toBe(0);

    const halfStar = wrapper.find('.mock-star-half');
    expect(halfStar.exists()).toBe(false);
  });
});
