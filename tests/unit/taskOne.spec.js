import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TaskOne from '@/components/TaskOne.vue'

describe('Output statistics of given string', () => {
  it('get the given position', () => {
    const wrapper = shallowMount(TaskOne)
    expect(wrapper.vm.resDetails).to.be.an('array');
    wrapper.find('button').trigger('click');
  })
})
