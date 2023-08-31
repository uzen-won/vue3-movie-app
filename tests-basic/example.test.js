import { mount } from '@vue/test-utils'
import Example from './Example.vue'

test('메시지를 변경합니다.', async ()=> {
  const wrapper = mount(Example)
  //wrapper.vm === this
  expect(wrapper.vm.msg).toBe("component msg");
  //wrapper.vm.msg = 'hello won!'
  await wrapper.setData({
    msg : 'hello won!'
  })
  expect(wrapper.vm.msg).toBe("hello won!"); //성공
  //expect(wrapper.find("div").text()).toBe('Hi won?') //실패
  expect(wrapper.find("div").text()).toBe("hello won!"); //실패
})