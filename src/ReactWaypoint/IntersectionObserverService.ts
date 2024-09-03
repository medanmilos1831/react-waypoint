class IntersectionObserverService {
  registry: { [key: string]: any } = {};
  setRegistry = (id: string, obj: any) => {
    this.registry = {
      ...this.registry,
      [`${id}`]: obj,
    };
  };
  getRegistry = (id: string) => {
    return this.registry[id];
  };
  intersection = (() => {
    let self = this;
    return new IntersectionObserver(
      function (entries: IntersectionObserverEntry[]) {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            self.getRegistry(entry.target.dataset.id).onEnter({
              item: entry.target,
              entry,
            });
          }
          if (!entry.isIntersecting) {
            self.getRegistry(entry.target.dataset.id).onLeave({
              item: entry.target,
              entry,
            });
          }
        });
      },
      {
        threshold: 1,
      }
    );
  })();
}

export { IntersectionObserverService };
