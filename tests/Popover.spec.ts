import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Popover from '../src/components/Popover/Popover.vue';

describe('Popover', () => {
  it('renders when open is true', () => {
    const wrapper = mount(Popover, {
      props: {
        open: true,
      },
    });

    // Verifica se o popover foi renderizado
    expect(wrapper.find('.popover').exists()).toBe(true);
  });

  it('does not render when open is false', () => {
    const wrapper = mount(Popover, {
      props: {
        open: false,
      },
    });

    // Verifica se o popover não foi renderizado
    expect(wrapper.find('.popover').exists()).toBe(false);
  });

  it('displays the correct options when open', () => {
    const wrapper = mount(Popover, {
      props: {
        open: true,
      },
    });

    // Verifica se as opções estão corretas
    const options = wrapper.findAll('.popover-options span');
    expect(options.length).toBe(4);
    expect(options[0].text()).toBe('Entrar');
    expect(options[1].text()).toBe('Minha Conta');
    expect(options[2].text()).toBe('Endereços');
    expect(options[3].text()).toBe('Minha Netshoes');
  });
});