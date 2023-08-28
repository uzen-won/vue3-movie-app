import { asyncFn } from './example'
describe('비동기 테스트', () => { 
  //test('테스트 이름','콜백함수','테스트시간')
  test('async/await', async () => { 
    const res = await asyncFn()
    expect(res).toBe('Done!')
  }, 7000)
})