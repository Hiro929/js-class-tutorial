(() => {

    class Accordion {
        // 初期化
        constructor(obj){

            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);

            const triggerLen = $trigger.length;
            let index = 0;
            while(index < triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        }

        // 実行される処理を書く
        clickHandler = (e) => {
            e.preventDefault();

            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;

            if($content.style.display === 'block') {
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        };
    }

    // インスタンスの生成
    const fuckingAccordion = new Accordion({
        hookName: '#js-faq',
        tagName: 'p'
    });

    const dummyAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName: 'a'
    });

    const miniAccordion = new Accordion({
        hookName: '#js-accordion-mini',
        tagName: 'dt'
    });
})();

// クラスのコードならインスタンスの値を変えるだけでパターンを量産できる