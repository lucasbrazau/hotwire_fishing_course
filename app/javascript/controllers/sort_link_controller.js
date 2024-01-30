import { Controller } from "@hotwired/stimulus"
import debounce from "debounce"

// Connects to data-controller="form"
export default class extends Controller {
    static targets = ["sort", "direction"]

  updateForm(event){
    let searchParams = new URL(event.detail.url).searchParams

    this.sortTarget.value = searchParams.get('sort')
    this.directionTarget.value = searchParams.get('direction')
  }
}
