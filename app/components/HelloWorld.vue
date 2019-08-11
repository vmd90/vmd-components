<template>
  <div>
    <vmd-container>
      <vmd-text class="is-size-1">Paragraph h1</vmd-text>
      <vmd-text class="is-size-2">Paragraph h2</vmd-text>
      <vmd-text class="is-size-3">Paragraph h3</vmd-text>
      <vmd-text class="is-size-4">Paragraph h4</vmd-text>
      <vmd-text class="is-size-5">Paragraph h5</vmd-text>
      <vmd-text class="is-size-6">Paragraph h6</vmd-text>
      <br>
      <vmd-text class="has-background-light is-mb-1" :is-loading="loading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea natus eum accusantium minima, maiores fugiat ratione est, sapiente nihil sit, voluptas fugit autem! Consequuntur dolor ratione aspernatur ducimus error.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea natus eum accusantium minima, maiores fugiat ratione est, sapiente nihil sit, voluptas fugit autem! Consequuntur dolor ratione aspernatur ducimus error.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea natus eum accusantium minima, maiores fugiat ratione est, sapiente nihil sit, voluptas fugit autem! Consequuntur dolor ratione aspernatur ducimus error.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea natus eum accusantium minima, maiores fugiat ratione est, sapiente nihil sit, voluptas fugit autem! Consequuntur dolor ratione aspernatur ducimus error.
      </vmd-text>
      <vmd-button type="is-success" @click="loading = !loading">Click to display loading in text above</vmd-button>
    </vmd-container>

    <vmd-container>
      <vmd-text class="is-size-4">Buttons</vmd-text>
      <vmd-row>
        <vmd-col class="is-flex flex-direction-column flex-grow-0">
          <vmd-button type="is-primary" class="is-mb-1">Primary</vmd-button>
          <vmd-button type="is-success" class="is-mb-1">Success</vmd-button>
          <vmd-button type="is-danger" class="is-mb-1">Danger</vmd-button>
          <vmd-button type="is-warning" class="is-mb-1">Warning</vmd-button>
        </vmd-col>
        <vmd-col class="is-flex flex-direction-column flex-grow-0">
          <vmd-button type="is-info" class="is-mb-1">Info</vmd-button>
          <vmd-button type="is-dark" class="is-mb-1">Dark</vmd-button>
          <vmd-button type="is-black" class="is-mb-1">Black</vmd-button>
          <vmd-button type="is-light" class="is-mb-1">Light</vmd-button>
        </vmd-col>
        <vmd-col class="is-flex flex-direction-column flex-grow-0">
          <vmd-button type="is-primary is-outlined" class="is-mb-1">Primary</vmd-button>
          <vmd-button type="is-success is-outlined" class="is-mb-1">Success</vmd-button>
          <vmd-button type="is-danger is-outlined" class="is-mb-1">Danger</vmd-button>
          <vmd-button type="is-warning is-outlined" class="is-mb-1">Warning</vmd-button>
        </vmd-col>
        <vmd-col class="is-flex flex-direction-column flex-grow-0">
          <vmd-button type="is-info is-outlined" class="is-mb-1">Info</vmd-button>
          <vmd-button type="is-dark is-outlined" class="is-mb-1">Dark</vmd-button>
          <vmd-button type="is-black is-outlined" class="is-mb-1">Black</vmd-button>
          <vmd-button type="is-light is-outlined" class="is-mb-1">Light</vmd-button>
        </vmd-col>
      </vmd-row>
    </vmd-container>

    <vmd-container>
      <vmd-text class="is-size-4">Editor</vmd-text>
      <vmd-editor></vmd-editor>
    </vmd-container>
  </div>
</template>

<script>
import VmdContainer from "./vmd-components/Container";
import VmdButton from "./vmd-components/Button";
import VmdText from "./vmd-components/Text";
import VmdRow from "./vmd-components/Row";
import VmdCol from "./vmd-components/Col";
import VmdEditor from "./vmd-components/MarkdownEditor";

export default {
  components: {
    VmdContainer,
    VmdButton,
    VmdText,
    VmdRow,
    VmdCol,
    VmdEditor
  },
  data: () => ({
    loading: false
  })
}
</script>
