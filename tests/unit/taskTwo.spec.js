import {
  expect
} from 'chai'
import {
  shallowMount
} from '@vue/test-utils'
import TaskTwo from '@/components/TaskTwo.vue'

describe('Output the given position value', () => {
  const wrapper = shallowMount(TaskTwo)
  it('Check Result is 0 befpre click the Check button', () => {
    expect(wrapper.vm.result).equal(0);
    wrapper.find('button').trigger('click');
  })

  it('Input 1 : output 1', () => {
    // add value -1 always
    expect(wrapper.vm.getDigit(1 - 1)).equal('1');
  })

  it('Input 9 : output 9', () => {
    // add value -1 always
    expect(wrapper.vm.getDigit(9 - 1)).equal('9');
  })

  it('Input 1000 : output 3', () => {
    // add value -1 always
    expect(wrapper.vm.getDigit(1000 - 1)).equal('3');
  })

  it('Input 1000000 : output 1', () => {
    // add value -1 always
    expect(wrapper.vm.getDigit(1000000 - 1)).equal('1');
  })

  it('Input 1000000000 : output 1', () => {
    // add value -1 always
    expect(wrapper.vm.getDigit(1000000000 - 1)).equal('1');
  })

  
 
  
  

})