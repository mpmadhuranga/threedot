import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TaskTwo from '@/components/TaskTwo.vue'

describe('Output the given position value', () => {
  it('get the given position', () => {
    const wrapper = shallowMount(TaskTwo)
    expect(wrapper.vm.result).equal(0);
    wrapper.find('button').trigger('click');
  })
})
