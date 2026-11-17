class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let size = 0

        let openChar = ["(", "[", "{"]
        let closeChar = [")", "]", "}"]

        for (let i = 0; i < s.length; i++) {
            let charS = s[i]

            if (openChar.includes(charS)) {
                stack.push(charS)
                size++
            }

            else {
                if (size > 0) {
                    let topChar = stack.pop()
                    let expectedChar = ""

                    switch (topChar) {
                        case "(":
                            expectedChar = ")"
                            break;
                        case "{":
                            expectedChar = "}"
                            break;
                        case "[":
                            expectedChar = "]"
                            break;
                        default:
                            return false
                    }

                    if (charS == expectedChar) {
                        size--
                    }

                    else return false

                } else {
                    return false
                }
            }

        }


        if (size > 0) return false

        return true
    }
}
