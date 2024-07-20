!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var s in n)("object"==typeof exports?exports:t)[s]=n[s]}}(self,(()=>(()=>{"use strict";var t={190:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BREAKPOINTS=e.COMBO_BOX_ACCESSIBILITY_KEY_SET=e.SELECT_ACCESSIBILITY_KEY_SET=e.TABS_ACCESSIBILITY_KEY_SET=e.OVERLAY_ACCESSIBILITY_KEY_SET=e.DROPDOWN_ACCESSIBILITY_KEY_SET=e.POSITIONS=void 0,e.POSITIONS={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},e.DROPDOWN_ACCESSIBILITY_KEY_SET=["Escape","ArrowUp","ArrowDown","Home","End","Enter"],e.OVERLAY_ACCESSIBILITY_KEY_SET=["Escape","Tab"],e.TABS_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End"],e.SELECT_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter","Tab"],e.COMBO_BOX_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter"],e.BREAKPOINTS={sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},737:(t,e)=>{
/*
 * HSBasePlugin
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.el=t,this.options=e,this.events=n,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var n;t.push({id:(null===(n=null==e?void 0:e.el)||void 0===n?void 0:n.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=n},233:function(t,e,n){
/*
 * HSSelect
 * @version: 2.1.0
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
var s,i=this&&this.__extends||(s=function(t,e){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},s(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)},l=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var s,i=0,o=e.length;i<o;i++)!s&&i in e||(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(969),d=r(n(737)),c=n(190),u=function(t){function e(e,n){var s,i=t.call(this,e,n)||this,l=e.getAttribute("data-hs-select"),r=l?JSON.parse(l):{},a=o(o({},r),n);return i.value=(null==a?void 0:a.value)||i.el.value||null,i.placeholder=(null==a?void 0:a.placeholder)||"Select...",i.hasSearch=(null==a?void 0:a.hasSearch)||!1,i.preventSearchFocus=(null==a?void 0:a.preventSearchFocus)||!1,i.mode=(null==a?void 0:a.mode)||"default",i.viewport=void 0!==(null==a?void 0:a.viewport)?document.querySelector(null==a?void 0:a.viewport):null,i.isOpened=Boolean(null==a?void 0:a.isOpened)||!1,i.isMultiple=i.el.hasAttribute("multiple")||!1,i.isDisabled=i.el.hasAttribute("disabled")||!1,i.selectedItems=[],i.wrapperClasses=(null==a?void 0:a.wrapperClasses)||null,i.toggleTag=(null==a?void 0:a.toggleTag)||null,i.toggleClasses=(null==a?void 0:a.toggleClasses)||null,i.toggleCountText=(null==a?void 0:a.toggleCountText)||null,i.toggleCountTextMinItems=(null==a?void 0:a.toggleCountTextMinItems)||1,i.tagsItemTemplate=(null==a?void 0:a.tagsItemTemplate)||null,i.tagsItemClasses=(null==a?void 0:a.tagsItemClasses)||null,i.tagsInputClasses=(null==a?void 0:a.tagsInputClasses)||null,i.dropdownTag=(null==a?void 0:a.dropdownTag)||null,i.dropdownClasses=(null==a?void 0:a.dropdownClasses)||null,i.dropdownDirectionClasses=(null==a?void 0:a.dropdownDirectionClasses)||null,i.dropdownSpace=(null==a?void 0:a.dropdownSpace)||10,i.searchWrapperTemplate=(null==a?void 0:a.searchWrapperTemplate)||null,i.searchWrapperClasses=(null==a?void 0:a.searchWrapperClasses)||"bg-white p-2 sticky top-0",i.searchClasses=(null==a?void 0:a.searchClasses)||"block w-[calc(100%-2rem)] text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 py-2 px-3 my-2 mx-4",i.searchPlaceholder=(null==a?void 0:a.searchPlaceholder)||"Search...",i.searchNoResultText=(null==a?void 0:a.searchNoResultText)||"No results found",i.searchNoResultClasses=(null==a?void 0:a.searchNoResultClasses)||"px-4 text-sm text-gray-800 dark:text-neutral-200",i.optionTemplate=(null==a?void 0:a.optionTemplate)||null,i.optionTag=(null==a?void 0:a.optionTag)||null,i.optionClasses=(null==a?void 0:a.optionClasses)||null,i.extraMarkup=(null==a?void 0:a.extraMarkup)||null,i.descriptionClasses=(null==a?void 0:a.descriptionClasses)||null,i.iconClasses=(null==a?void 0:a.iconClasses)||null,i.isAddTagOnEnter=null===(s=null==a?void 0:a.isAddTagOnEnter)||void 0===s||s,i.animationInProcess=!1,i.selectOptions=[],i.tagsInputHelper=null,i.init(),i}return i(e,t),e.prototype.init=function(){this.createCollection(window.$hsSelectCollection,this),this.build()},e.prototype.build=function(){var t=this;if(this.el.style.display="none",this.el.children&&Array.from(this.el.children).filter((function(t){return t.value&&""!==t.value})).forEach((function(e){var n=e.getAttribute("data-hs-select-option");t.selectOptions=l(l([],t.selectOptions,!0),[{title:e.textContent,val:e.value,options:"undefined"!==n?JSON.parse(n):null}],!1)})),this.isMultiple){var e=Array.from(this.el.options).filter((function(t){return t.selected}));if(e){var n=[];e.forEach((function(t){n.push(t.value)})),this.value=n}}this.buildWrapper(),"tags"===this.mode?this.buildTags():this.buildToggle(),this.buildDropdown(),this.extraMarkup&&this.buildExtraMarkup()},e.prototype.buildWrapper=function(){var t=this;this.wrapper=document.createElement("div"),this.wrapper.classList.add("hs-select","relative"),"tags"===this.mode&&this.wrapper.addEventListener("click",(function(e){e.target.closest("[data-hs-select-dropdown]")||e.target.closest("[data-tag-value]")||t.tagsInput.focus()})),this.wrapperClasses&&(0,a.classToClassList)(this.wrapperClasses,this.wrapper),this.el.before(this.wrapper),this.wrapper.append(this.el)},e.prototype.buildExtraMarkup=function(){var t=this,e=function(e){t.wrapper.append((0,a.htmlToElement)(e))};Array.isArray(this.extraMarkup)?this.extraMarkup.forEach((function(t){return e(t)})):e(this.extraMarkup)},e.prototype.buildToggle=function(){var t,e,n,s=this;this.toggleTextWrapper=document.createElement("span"),this.toggleTextWrapper.classList.add("truncate"),this.toggle=(0,a.htmlToElement)(this.toggleTag||"<div></div>"),e=this.toggle.querySelector("[data-icon]"),n=this.toggle.querySelector("[data-title]"),!this.isMultiple&&e&&this.setToggleIcon(),!this.isMultiple&&n&&this.setToggleTitle(),this.isMultiple?this.toggleTextWrapper.innerHTML=this.value.length?this.stringFromValue():this.placeholder:this.toggleTextWrapper.innerHTML=(null===(t=this.getItemByValue(this.value))||void 0===t?void 0:t.title)||this.placeholder,n||this.toggle.append(this.toggleTextWrapper),this.toggleClasses&&(0,a.classToClassList)(this.toggleClasses,this.toggle),this.isDisabled&&this.toggle.classList.add("disabled"),this.wrapper&&this.wrapper.append(this.toggle),this.toggle.addEventListener("click",(function(){if(s.isDisabled)return!1;s.isOpened?s.close():s.open()}))},e.prototype.setToggleIcon=function(){var t,e,n=this.toggle.querySelector("[data-icon]");if(n.innerHTML="",n){var s=(0,a.htmlToElement)((null===(e=null===(t=this.getItemByValue(this.value))||void 0===t?void 0:t.options)||void 0===e?void 0:e.icon)||"");n.append(s),s?n.classList.remove("hidden"):n.classList.add("hidden")}},e.prototype.setToggleTitle=function(){var t,e=this.toggle.querySelector("[data-title]");if(e.classList.add("truncate"),e.innerHTML="",e){var n=(null===(t=this.getItemByValue(this.value))||void 0===t?void 0:t.title)||this.placeholder;e.innerHTML=n,this.toggle.append(e)}},e.prototype.buildTags=function(){this.buildTagsInput(),this.setTagsItems()},e.prototype.reassignTagsInputPlaceholder=function(t){this.tagsInput.placeholder=t,this.tagsInputHelper.innerHTML=t,this.calculateInputWidth()},e.prototype.buildTagsItem=function(t){var e,n,s,i,o,l,r,d=this,c=this.getItemByValue(t),u=document.createElement("div");if(u.setAttribute("data-tag-value",t),this.tagsItemClasses&&(0,a.classToClassList)(this.tagsItemClasses,u),this.tagsItemTemplate&&(i=(0,a.htmlToElement)(this.tagsItemTemplate),u.append(i)),null===(e=null==c?void 0:c.options)||void 0===e?void 0:e.icon){var p=(0,a.htmlToElement)(null===(n=null==c?void 0:c.options)||void 0===n?void 0:n.icon);(r=i?i.querySelector("[data-icon]"):document.createElement("span")).append(p),i||u.append(r)}i&&i.querySelector("[data-icon]")&&!(null===(s=null==c?void 0:c.options)||void 0===s?void 0:s.icon)&&i.querySelector("[data-icon]").classList.add("hidden"),(o=i?i.querySelector("[data-title]"):document.createElement("span")).textContent=c.title||"",i||u.append(o),i?l=i.querySelector("[data-remove]"):((l=document.createElement("span")).textContent="X",u.append(l)),l.addEventListener("click",(function(){d.value=d.value.filter((function(e){return e!==t})),d.selectedItems=d.selectedItems.filter((function(e){return e!==t})),d.value.length||d.reassignTagsInputPlaceholder(d.placeholder),d.unselectMultipleItems(),d.selectMultipleItems(),u.remove()})),this.wrapper.append(u)},e.prototype.getItemByValue=function(t){return this.selectOptions.find((function(e){return e.val===t}))},e.prototype.setTagsItems=function(){var t=this;this.value&&this.value.forEach((function(e){t.selectedItems.includes(e)||t.buildTagsItem(e),t.selectedItems=t.selectedItems.includes(e)?t.selectedItems:l(l([],t.selectedItems,!0),[e],!1)}))},e.prototype.buildTagsInput=function(){var t=this;this.tagsInput=document.createElement("input"),this.tagsInputClasses&&(0,a.classToClassList)(this.tagsInputClasses,this.tagsInput),this.tagsInput.addEventListener("focus",(function(){return t.open()})),this.tagsInput.addEventListener("input",(function(){return t.calculateInputWidth()})),this.tagsInput.addEventListener("input",(0,a.debounce)((function(e){return t.searchOptions(e.target.value)}))),this.tagsInput.addEventListener("keydown",(function(e){if("Enter"===e.key&&t.isAddTagOnEnter){var n=e.target.value;if(t.selectOptions.find((function(t){return t.val===n})))return!1;t.addSelectOption(n,n),t.buildOption(n,n),t.dropdown.querySelector('[data-value="'.concat(n,'"]')).click(),t.resetTagsInputField()}})),this.wrapper.append(this.tagsInput),setTimeout((function(){t.adjustInputWidth(),t.reassignTagsInputPlaceholder(t.value.length?"":t.placeholder)}))},e.prototype.buildDropdown=function(){var t=this;this.dropdown=(0,a.htmlToElement)(this.dropdownTag||"<div></div>"),this.dropdown.setAttribute("data-hs-select-dropdown",""),this.dropdown.classList.add("absolute","top-full"),this.isOpened||this.dropdown.classList.add("hidden"),this.dropdownClasses&&(0,a.classToClassList)(this.dropdownClasses,this.dropdown),this.wrapper&&this.wrapper.append(this.dropdown),this.dropdown&&this.hasSearch&&this.buildSearch(),this.selectOptions&&this.selectOptions.forEach((function(e,n){return t.buildOption(e.title,e.val,e.options,"".concat(n))}))},e.prototype.buildSearch=function(){var t,e=this;this.searchWrapper=(0,a.htmlToElement)(this.searchWrapperTemplate||"<div></div>"),this.searchWrapperClasses&&(0,a.classToClassList)(this.searchWrapperClasses,this.searchWrapper),t=this.searchWrapper.querySelector("[data-input]"),this.search=(0,a.htmlToElement)('<input type="text" />'),this.search.placeholder=this.searchPlaceholder,this.searchClasses&&(0,a.classToClassList)(this.searchClasses,this.search),this.search.addEventListener("input",(0,a.debounce)((function(t){return e.searchOptions(t.target.value)}))),t?t.append(this.search):this.searchWrapper.append(this.search),this.dropdown.append(this.searchWrapper)},e.prototype.buildOption=function(t,e,n,s){var i=this;void 0===s&&(s="1");var o=null,l=(0,a.htmlToElement)(this.optionTag||"<div></div>");if(l.setAttribute("data-value",e),l.setAttribute("data-title-value",t),l.setAttribute("tabIndex",s),l.classList.add("cursor-pointer"),this.optionTemplate&&(o=(0,a.htmlToElement)(this.optionTemplate),l.append(o)),o?o.querySelector("[data-title]").textContent=t||"":l.textContent=t||"",n){if(n.icon){var r=(0,a.htmlToElement)(n.icon);if(r.classList.add("mw-full"),o)o.querySelector("[data-icon]").append(r);else{var d=(0,a.htmlToElement)("<div></div>");this.iconClasses&&(0,a.classToClassList)(this.iconClasses,d),d.append(r),l.append(d)}}if(n.description)if(o)o.querySelector("[data-description]").append(n.description);else{var c=(0,a.htmlToElement)("<div></div>");c.textContent=n.description,this.descriptionClasses&&(0,a.classToClassList)(this.descriptionClasses,c),l.append(c)}}o&&o.querySelector("[data-icon]")&&!n&&!(null==n?void 0:n.icon)&&o.querySelector("[data-icon]").classList.add("hidden"),this.value&&(this.isMultiple?this.value.includes(e):this.value===e)&&l.classList.add("selected"),l.addEventListener("click",(function(){return i.onSelectOption(e)})),this.optionClasses&&(0,a.classToClassList)(this.optionClasses,l),this.dropdown&&this.dropdown.append(l)},e.prototype.destroyOption=function(t){var e=this.dropdown.querySelector('[data-value="'.concat(t,'"]'));if(!e)return!1;e.remove()},e.prototype.buildOriginalOption=function(t,e,n){var s=(0,a.htmlToElement)("<option></option>");s.setAttribute("value",e),s.setAttribute("data-hs-select-option",JSON.stringify(n)),s.innerText=t,this.el.append(s)},e.prototype.destroyOriginalOption=function(t){var e=this.el.querySelector('[value="'.concat(t,'"]'));if(!e)return!1;e.remove()},e.prototype.buildTagsInputHelper=function(){this.tagsInputHelper=document.createElement("span"),this.tagsInputHelper.style.fontSize=window.getComputedStyle(this.tagsInput).fontSize,this.tagsInputHelper.style.fontFamily=window.getComputedStyle(this.tagsInput).fontFamily,this.tagsInputHelper.style.fontWeight=window.getComputedStyle(this.tagsInput).fontWeight,this.tagsInputHelper.style.letterSpacing=window.getComputedStyle(this.tagsInput).letterSpacing,this.tagsInputHelper.style.visibility="hidden",this.tagsInputHelper.style.whiteSpace="pre",this.tagsInputHelper.style.position="absolute",this.wrapper.appendChild(this.tagsInputHelper)},e.prototype.calculateInputWidth=function(){this.tagsInputHelper.textContent=this.tagsInput.value||this.tagsInput.placeholder;var t=parseInt(window.getComputedStyle(this.tagsInput).paddingLeft)+parseInt(window.getComputedStyle(this.tagsInput).paddingRight),e=parseInt(window.getComputedStyle(this.tagsInput).borderLeftWidth)+parseInt(window.getComputedStyle(this.tagsInput).borderRightWidth),n=this.tagsInputHelper.offsetWidth+t+e,s=this.wrapper.offsetWidth-(parseInt(window.getComputedStyle(this.wrapper).paddingLeft)+parseInt(window.getComputedStyle(this.wrapper).paddingRight));this.tagsInput.style.width="".concat(Math.min(n,s)+2,"px")},e.prototype.adjustInputWidth=function(){this.buildTagsInputHelper(),this.calculateInputWidth()},e.prototype.onSelectOption=function(t){var e=this;if(this.clearSelections(),this.isMultiple?(this.value=this.value.includes(t)?Array.from(this.value).filter((function(e){return e!==t})):l(l([],Array.from(this.value),!0),[t],!1),this.selectMultipleItems(),this.setNewValue()):(this.value=t,this.selectSingleItem(),this.setNewValue()),this.fireEvent("change",this.value),(0,a.dispatch)("change.hs.select",this.el,this.value),"tags"===this.mode){var n=this.selectedItems.filter((function(t){return!e.value.includes(t)}));n.length&&n.forEach((function(t){e.selectedItems=e.selectedItems.filter((function(e){return e!==t})),e.wrapper.querySelector('[data-tag-value="'.concat(t,'"]')).remove()})),this.resetTagsInputField()}this.isMultiple||(this.toggle.querySelector("[data-icon]")&&this.setToggleIcon(),this.toggle.querySelector("[data-title]")&&this.setToggleTitle(),this.close()),this.value.length||"tags"!==this.mode||this.reassignTagsInputPlaceholder(this.placeholder),this.isOpened&&"tags"===this.mode&&this.tagsInput&&this.tagsInput.focus(),this.triggerChangeEventForNativeSelect()},e.prototype.triggerChangeEventForNativeSelect=function(){this.el.value="".concat(this.value);var t=new Event("change",{bubbles:!0});this.el.dispatchEvent(t)},e.prototype.addSelectOption=function(t,e,n){this.selectOptions=l(l([],this.selectOptions,!0),[{title:t,val:e,options:n}],!1)},e.prototype.removeSelectOption=function(t){if(!!!this.selectOptions.some((function(e){return e.val===t})))return!1;this.selectOptions=this.selectOptions.filter((function(e){return e.val!==t}))},e.prototype.resetTagsInputField=function(){this.tagsInput.value="",this.reassignTagsInputPlaceholder(""),this.searchOptions("")},e.prototype.clearSelections=function(){Array.from(this.dropdown.children).forEach((function(t){t.classList.contains("selected")&&t.classList.remove("selected")})),Array.from(this.el.children).forEach((function(t){t.selected&&(t.selected=!1)}))},e.prototype.setNewValue=function(){"tags"===this.mode?this.setTagsItems():this.value.length?this.toggleTextWrapper.innerHTML=this.stringFromValue():this.toggleTextWrapper.innerHTML=this.placeholder},e.prototype.stringFromValue=function(){var t=this,e=[];return this.selectOptions.forEach((function(n){t.isMultiple?t.value.includes(n.val)&&e.push(n.title):t.value===n.val&&e.push(n.title)})),this.toggleCountText&&""!==this.toggleCountText&&e.length>=this.toggleCountTextMinItems?"".concat(e.length," ").concat(this.toggleCountText):e.join(", ")},e.prototype.selectSingleItem=function(){var t=this;Array.from(this.el.children).find((function(e){return t.value===e.value})).selected=!0,Array.from(this.dropdown.children).find((function(e){return t.value===e.getAttribute("data-value")})).classList.add("selected")},e.prototype.selectMultipleItems=function(){var t=this;Array.from(this.dropdown.children).filter((function(e){return t.value.includes(e.getAttribute("data-value"))})).forEach((function(t){return t.classList.add("selected")})),Array.from(this.el.children).filter((function(e){return t.value.includes(e.value)})).forEach((function(t){return t.selected=!0}))},e.prototype.unselectMultipleItems=function(){Array.from(this.dropdown.children).forEach((function(t){return t.classList.remove("selected")})),Array.from(this.el.children).forEach((function(t){return t.selected=!1}))},e.prototype.searchOptions=function(t){this.searchNoResult&&(this.searchNoResult.remove(),this.searchNoResult=null),this.searchNoResult=(0,a.htmlToElement)("<span></span>"),this.searchNoResult.innerText=this.searchNoResultText,(0,a.classToClassList)(this.searchNoResultClasses,this.searchNoResult);var e=this.dropdown.querySelectorAll("[data-value]"),n=!1;e.forEach((function(e){e.getAttribute("data-title-value").toLocaleLowerCase().includes(t.toLocaleLowerCase())?(e.classList.remove("hidden"),n=!0):e.classList.add("hidden")})),n||this.dropdown.append(this.searchNoResult)},e.prototype.eraseToggleIcon=function(){var t=this.toggle.querySelector("[data-icon]");t&&(t.innerHTML=null,t.classList.add("hidden"))},e.prototype.eraseToggleTitle=function(){var t=this.toggle.querySelector("[data-title]");t?t.innerHTML=this.placeholder:this.toggleTextWrapper.innerHTML=this.placeholder},e.prototype.destroy=function(){var t=this.el.parentElement.parentElement;this.el.classList.remove("hidden"),this.el.style.display="",t.prepend(this.el),t.querySelector(".hs-select").remove(),this.wrapper=null},e.prototype.open=function(){var t=this;if(this.animationInProcess)return!1;this.animationInProcess=!0,this.dropdown.classList.remove("hidden"),this.recalculateDirection(),setTimeout((function(){t.wrapper.classList.add("active"),t.dropdown.classList.add("opened"),t.hasSearch&&!t.preventSearchFocus&&t.search.focus(),t.animationInProcess=!1})),this.isOpened=!0},e.prototype.close=function(){var t,e,n,s=this;if(this.animationInProcess)return!1;this.animationInProcess=!0,this.wrapper.classList.remove("active"),this.dropdown.classList.remove("opened","bottom-full","top-full"),(null===(t=this.dropdownDirectionClasses)||void 0===t?void 0:t.bottom)&&this.dropdown.classList.remove(this.dropdownDirectionClasses.bottom),(null===(e=this.dropdownDirectionClasses)||void 0===e?void 0:e.top)&&this.dropdown.classList.remove(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="",this.dropdown.style.marginBottom="",(0,a.afterTransition)(this.dropdown,(function(){s.dropdown.classList.add("hidden"),s.hasSearch&&(s.search.value="",s.search.dispatchEvent(new Event("input",{bubbles:!0})),s.search.blur()),s.animationInProcess=!1})),null===(n=this.dropdown.querySelector(".hs-select-option-highlighted"))||void 0===n||n.classList.remove("hs-select-option-highlighted"),this.isOpened=!1},e.prototype.addOption=function(t){var e=this,n="".concat(this.selectOptions.length),s=function(t){var s=t.title,i=t.val,o=t.options;!!e.selectOptions.some((function(t){return t.val===i}))||(e.addSelectOption(s,i,o),e.buildOption(s,i,o,n),e.buildOriginalOption(s,i,o))};Array.isArray(t)?t.forEach((function(t){s(t)})):s(t)},e.prototype.removeOption=function(t){var e=this,n=function(t){!!e.selectOptions.some((function(e){return e.val===t}))&&(e.removeSelectOption(t),e.destroyOption(t),e.destroyOriginalOption(t),e.value===t&&(e.value=null,e.eraseToggleTitle(),e.eraseToggleIcon()))};Array.isArray(t)?t.forEach((function(t){n(t)})):n(t)},e.prototype.recalculateDirection=function(){var t,e,n,s;(0,a.isEnoughSpace)(this.dropdown,this.toggle||this.tagsInput,"bottom",this.dropdownSpace,this.viewport)?(this.dropdown.classList.remove("bottom-full"),(null===(t=this.dropdownDirectionClasses)||void 0===t?void 0:t.bottom)&&this.dropdown.classList.remove(this.dropdownDirectionClasses.bottom),this.dropdown.style.marginBottom="",this.dropdown.classList.add("top-full"),(null===(e=this.dropdownDirectionClasses)||void 0===e?void 0:e.top)&&this.dropdown.classList.add(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="".concat(this.dropdownSpace,"px")):(this.dropdown.classList.remove("top-full"),(null===(n=this.dropdownDirectionClasses)||void 0===n?void 0:n.top)&&this.dropdown.classList.remove(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="",this.dropdown.classList.add("bottom-full"),(null===(s=this.dropdownDirectionClasses)||void 0===s?void 0:s.bottom)&&this.dropdown.classList.add(this.dropdownDirectionClasses.bottom),this.dropdown.style.marginBottom="".concat(this.dropdownSpace,"px"))},e.getInstance=function(t,e){var n=window.$hsSelectCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return n?e?n:n.element:null},e.autoInit=function(){window.$hsSelectCollection||(window.$hsSelectCollection=[]),document.querySelectorAll("[data-hs-select]:not(.--prevent-on-load-init)").forEach((function(t){if(!window.$hsSelectCollection.find((function(e){var n;return(null===(n=null==e?void 0:e.element)||void 0===n?void 0:n.el)===t}))){var n=t.getAttribute("data-hs-select"),s=n?JSON.parse(n):{};new e(t,s)}})),window.$hsSelectCollection&&(window.addEventListener("click",(function(t){var n=t.target;e.closeCurrentlyOpened(n)})),document.addEventListener("keydown",(function(t){return e.accessibility(t)})))},e.close=function(t){var e=window.$hsSelectCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));e&&e.element.isOpened&&e.element.close()},e.closeCurrentlyOpened=function(t){if(void 0===t&&(t=null),!t.closest(".hs-select.active")){var e=window.$hsSelectCollection.filter((function(t){return t.element.isOpened}))||null;e&&e.forEach((function(t){t.element.close()}))}},e.accessibility=function(t){if(window.$hsSelectCollection.find((function(t){return t.element.isOpened}))&&c.SELECT_ACCESSIBILITY_KEY_SET.includes(t.code)&&!t.metaKey)switch(t.code){case"Escape":t.preventDefault(),this.onEscape();break;case"ArrowUp":t.preventDefault(),this.onArrow();break;case"ArrowDown":t.preventDefault(),this.onArrow(!1);break;case"Tab":t.preventDefault(),this.onTab(t.shiftKey);break;case"Home":t.preventDefault(),this.onStartEnd();break;case"End":t.preventDefault(),this.onStartEnd(!1);break;case"Enter":t.preventDefault(),this.onEnter(t)}},e.onEscape=function(){var t=window.$hsSelectCollection.find((function(t){return t.element.isOpened}));t&&t.element.close()},e.onArrow=function(t){void 0===t&&(t=!0);var e=window.$hsSelectCollection.find((function(t){return t.element.isOpened}));if(e){var n=e.element.dropdown;if(!n)return!1;var s=(t?Array.from(n.querySelectorAll(":scope > *:not(.hidden)")).reverse():Array.from(n.querySelectorAll(":scope > *:not(.hidden)"))).filter((function(t){return!t.classList.contains("disabled")})),i=n.querySelector(".hs-select-option-highlighted");i||s[0].classList.add("hs-select-option-highlighted");var o=s.findIndex((function(t){return t===i}));o+1<s.length&&o++,s[o].focus(),i&&i.classList.remove("hs-select-option-highlighted"),s[o].classList.add("hs-select-option-highlighted")}},e.onTab=function(t){void 0===t&&(t=!0);var e=window.$hsSelectCollection.find((function(t){return t.element.isOpened}));if(e){var n=e.element.dropdown;if(!n)return!1;var s=(t?Array.from(n.querySelectorAll(":scope >  *:not(.hidden)")).reverse():Array.from(n.querySelectorAll(":scope >  *:not(.hidden)"))).filter((function(t){return!t.classList.contains("disabled")})),i=n.querySelector(".hs-select-option-highlighted");i||s[0].classList.add("hs-select-option-highlighted");var o=s.findIndex((function(t){return t===i}));if(!(o+1<s.length))return i&&i.classList.remove("hs-select-option-highlighted"),e.element.close(),e.element.toggle.focus(),!1;s[++o].focus(),i&&i.classList.remove("hs-select-option-highlighted"),s[o].classList.add("hs-select-option-highlighted")}},e.onStartEnd=function(t){void 0===t&&(t=!0);var e=window.$hsSelectCollection.find((function(t){return t.element.isOpened}));if(e){var n=e.element.dropdown;if(!n)return!1;var s=(t?Array.from(n.querySelectorAll(":scope >  *:not(.hidden)")):Array.from(n.querySelectorAll(":scope >  *:not(.hidden)")).reverse()).filter((function(t){return!t.classList.contains("disabled")})),i=n.querySelector(".hs-select-option-highlighted");s.length&&(s[0].focus(),i&&i.classList.remove("hs-select-option-highlighted"),s[0].classList.add("hs-select-option-highlighted"))}},e.onEnter=function(t){var e=t.target.previousSibling;if(window.$hsSelectCollection.find((function(t){return t.element.el===e}))){var n=window.$hsSelectCollection.find((function(t){return t.element.isOpened})),s=window.$hsSelectCollection.find((function(t){return t.element.el===e}));n.element.close(),s.element.open()}else{(s=window.$hsSelectCollection.find((function(t){return t.element.isOpened})))&&s.element.onSelectOption(t.target.dataset.value||"")}},e}(d.default);window.addEventListener("load",(function(){u.autoInit()})),document.addEventListener("scroll",(function(){if(!window.$hsSelectCollection)return!1;var t=window.$hsSelectCollection.find((function(t){return t.element.isOpened}));t&&t.element.recalculateDirection()})),"undefined"!=typeof window&&(window.HSSelect=u),e.default=u},969:function(t,e){var n=this;Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isFormElement=e.isParentOrElementHidden=e.isEnoughSpace=e.isIpadOS=e.isIOS=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0;e.stringToBoolean=function(t){return"true"===t};e.getClassProperty=function(t,e,n){return void 0===n&&(n=""),(window.getComputedStyle(t).getPropertyValue(e)||n).replace(" ","")};e.getClassPropertyAlt=function(t,e,n){void 0===n&&(n="");var s="";return t.classList.forEach((function(t){t.includes(e)&&(s=t)})),s.match(/:(.*)]/)?s.match(/:(.*)]/)[1]:n};e.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isEnoughSpace=function(t,e,n,s,i){void 0===n&&(n="auto"),void 0===s&&(s=10),void 0===i&&(i=null);var o=e.getBoundingClientRect(),l=i?i.getBoundingClientRect():null,r=window.innerHeight,a=l?o.top-l.top:o.top,d=(i?l.bottom:r)-o.bottom,c=t.clientHeight+s;return"bottom"===n?d>=c:"top"===n?a>=c:a>=c||d>=c};e.isFormElement=function(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement};var s=function(t){return!!t&&("none"===window.getComputedStyle(t).display||s(t.parentElement))};e.isParentOrElementHidden=s;e.debounce=function(t,e){var s;return void 0===e&&(e=200),function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];clearTimeout(s),s=setTimeout((function(){t.apply(n,i)}),e)}};e.dispatch=function(t,e,n){void 0===n&&(n=null);var s=new CustomEvent(t,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(s)};e.afterTransition=function(t,e){var n=function(){e(),t.removeEventListener("transitionend",n,!0)};window.getComputedStyle(t,null).getPropertyValue("transition")!==(navigator.userAgent.includes("Firefox")?"all":"all 0s ease 0s")?t.addEventListener("transitionend",n,!0):e()};e.htmlToElement=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=function(t,e,n,s){void 0===n&&(n=" "),void 0===s&&(s="add"),t.split(n).forEach((function(t){return"add"===s?e.classList.add(t):e.classList.remove(t)}))};e.menuSearchHistory={historyIndex:-1,addHistory:function(t){this.historyIndex=t},existsInHistory:function(t){return t>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},e={};var n=function n(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,n),o.exports}(233);return n})()));