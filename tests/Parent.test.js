import { shallowMount } from '@vue/test-utils'
import Parent from './Parent'

test('mount', () => { 
  const wrapper = shallowMount(Parent);
  expect(wrapper.html()).toBe('')
})