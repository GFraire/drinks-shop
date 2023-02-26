import Header from "../components/Header.vue";
import { useDisplay } from "vuetify";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { reactive } from "vue";

vi.mock("vuetify");

describe("Render icon", () => {
  it("Should show menu icon", async () => {
    const getDisplayMocked = vi.mocked(useDisplay);
    getDisplayMocked.mockReturnValueOnce(
      reactive({
        width: {
          value: 350,
        },
      })
    );

    expect(Header).toBeTruthy();

    const wrapper = mount(Header);

    const img = wrapper.find("img");

    expect(img.attributes("alt")).toBe("Menu");
  });

  it("Should show search icon", async () => {
    const getDisplayMocked = vi.mocked(useDisplay);
    getDisplayMocked.mockReturnValueOnce(
      reactive({
        width: {
          value: 1080,
        },
      })
    );

    expect(Header).toBeTruthy();

    const wrapper = mount(Header);

    const img = wrapper.find("img");

    expect(img.attributes("alt")).toBe("Procurar");
  });
});
