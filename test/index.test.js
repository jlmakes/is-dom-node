import isDomNode from '../src/index'

describe('isDomNode(target)', () => {
	it('should return true when passed a Node', () => {
		const result = isDomNode(document.querySelector('body'))
		expect(result).to.be.true
	})

	it('should return false when passed HTML as a string', () => {
		const result = isDomNode('<div class="foo"></div>')
		expect(result).to.be.false
	})

	it('should return false when passed an invalid target', () => {
		expect(isDomNode(null)).to.be.false
		expect(isDomNode()).to.be.false
		expect(isDomNode({})).to.be.false
		expect(isDomNode('!')).to.be.false
	})
})
