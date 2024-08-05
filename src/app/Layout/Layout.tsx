import React from 'react';
import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import s from '../../app/App.module.sass';

const Layout = () => {
  return (
    <>
      <Header />
      <div className={s['app__main']}>
        <ProductCard
          price={1055}
          image={
            'https://cdn.3dmodels.org/wp-content/uploads/Apple/588_Apple_iPhone_15_Plus_Blue/Apple_iPhone_15_Plus_Blue_1000_0001.jpg'
          }
          title="IPhone15"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam possimus facere fugiat neque vel mollitia debitis accusamus nisi explicabo id, sapiente, qui atque repudiandae quos corporis animi asperiores accusantium?"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis sollicitudin velit, in efficitur tortor
          blandit in. In a consectetur sem. Proin sem lectus, convallis pretium mi sed, mattis aliquet ligula. Aliquam
          quis rhoncus libero. Ut rhoncus tortor massa, quis finibus risus consequat ut. Nullam dolor odio, pretium quis
          libero a, scelerisque imperdiet metus. Suspendisse lacinia convallis mollis. Aliquam ac nibh vitae velit
          laoreet tincidunt nec eu augue. Proin fringilla libero nibh, sit amet tempus tortor iaculis at. Aenean eget
          viverra lacus. Curabitur fringilla risus non tristique maximus. Nunc id pharetra odio. Duis vehicula ex
          mauris, sed pellentesque libero pellentesque placerat. Ut cursus elit orci, et faucibus lectus malesuada quis.
          Praesent in elementum ex. Duis luctus finibus leo sed placerat. In egestas ultrices ante, at sodales ligula
          sagittis ut. Proin ac nisl vel augue rutrum viverra. Maecenas sed nisl non diam pulvinar placerat. Praesent
          velit augue, vestibulum sed tempus in, laoreet quis nisi. Aliquam rutrum massa nisl, sed luctus turpis mattis
          id. In sed finibus nulla, vitae aliquam dui. Aenean et lorem velit. Sed gravida mauris sed lectus rutrum, vel
          tristique risus blandit. Nunc accumsan lectus eget nisi faucibus tincidunt. Fusce non congue sem. Suspendisse
          consectetur eu tellus nec suscipit. Nulla auctor ipsum sit amet nulla bibendum, in porta tortor laoreet. Duis
          sed vulputate nisi, sit amet condimentum nisl. Ut viverra viverra odio, non ullamcorper tellus facilisis eu.
          Phasellus suscipit maximus diam vel tempus. Donec vitae egestas purus. Integer euismod auctor lectus vel
          ultrices. Aenean id orci aliquet, tempor enim suscipit, iaculis arcu. Curabitur fringilla, enim convallis
          iaculis faucibus, nunc urna rhoncus orci, vel efficitur urna mi eget lorem. Donec consequat feugiat nisi sed
          imperdiet. Donec odio ex, auctor id purus placerat, accumsan ornare nunc. Morbi luctus mi cursus elit gravida,
          id aliquet felis suscipit. Donec eget mattis ipsum, nec varius ipsum. Sed ut turpis gravida, dignissim diam
          non, hendrerit ligula. Fusce congue sollicitudin libero, nec euismod massa tempus vitae. Integer ut lectus
          diam. Fusce feugiat eros id libero auctor mattis. Donec semper erat non libero maximus, a cursus dolor
          interdum. Pellentesque sollicitudin ex nec est tempor, eget viverra enim finibus. Proin ac nulla tellus.
          Aliquam id augue interdum, mattis dolor sed, convallis metus. Fusce quis mauris eu leo gravida posuere ut sit
          amet turpis. Nam eros odio, euismod sed semper nec, fringilla non urna. Vivamus risus metus, pellentesque
          cursus nisi congue, luctus volutpat lacus. Sed ut nibh aliquet, ullamcorper neque quis, sodales arcu. Aliquam
          id felis justo. Etiam non venenatis magna. Vivamus quis eros consequat, suscipit risus sodales, accumsan quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis sollicitudin velit, in efficitur tortor
          blandit in. In a consectetur sem. Proin sem lectus, convallis pretium mi sed, mattis aliquet ligula. Aliquam
          quis rhoncus libero. Ut rhoncus tortor massa, quis finibus risus consequat ut. Nullam dolor odio, pretium quis
          libero a, scelerisque imperdiet metus. Suspendisse lacinia convallis mollis. Aliquam ac nibh vitae velit
          laoreet tincidunt nec eu augue. Proin fringilla libero nibh, sit amet tempus tortor iaculis at. Aenean eget
          viverra lacus. Curabitur fringilla risus non tristique maximus. Nunc id pharetra odio. Duis vehicula ex
          mauris, sed pellentesque libero pellentesque placerat. Ut cursus elit orci, et faucibus lectus malesuada quis.
          Praesent in elementum ex. Duis luctus finibus leo sed placerat. In egestas ultrices ante, at sodales ligula
          sagittis ut. Proin ac nisl vel augue rutrum viverra. Maecenas sed nisl non diam pulvinar placerat. Praesent
          velit augue, vestibulum sed tempus in, laoreet quis nisi. Aliquam rutrum massa nisl, sed luctus turpis mattis
          id. In sed finibus nulla, vitae aliquam dui. Aenean et lorem velit. Sed gravida mauris sed lectus rutrum, vel
          tristique risus blandit. Nunc accumsan lectus eget nisi faucibus tincidunt. Fusce non congue sem. Suspendisse
          consectetur eu tellus nec suscipit. Nulla auctor ipsum sit amet nulla bibendum, in porta tortor laoreet. Duis
          sed vulputate nisi, sit amet condimentum nisl. Ut viverra viverra odio, non ullamcorper tellus facilisis eu.
          Phasellus suscipit maximus diam vel tempus. Donec vitae egestas purus. Integer euismod auctor lectus vel
          ultrices. Aenean id orci aliquet, tempor enim suscipit, iaculis arcu. Curabitur fringilla, enim convallis
          iaculis faucibus, nunc urna rhoncus orci, vel efficitur urna mi eget lorem. Donec consequat feugiat nisi sed
          imperdiet. Donec odio ex, auctor id purus placerat, accumsan ornare nunc. Morbi luctus mi cursus elit gravida,
          id aliquet felis suscipit. Donec eget mattis ipsum, nec varius ipsum. Sed ut turpis gravida, dignissim diam
          non, hendrerit ligula. Fusce congue sollicitudin libero, nec euismod massa tempus vitae. Integer ut lectus
          diam. Fusce feugiat eros id libero auctor mattis. Donec semper erat non libero maximus, a cursus dolor
          interdum. Pellentesque sollicitudin ex nec est tempor, eget viverra enim finibus. Proin ac nulla tellus.
          Aliquam id augue interdum, mattis dolor sed, convallis metus. Fusce quis mauris eu leo gravida posuere ut sit
          amet turpis. Nam eros odio, euismod sed semper nec, fringilla non urna. Vivamus risus metus, pellentesque
          cursus nisi congue, luctus volutpat lacus. Sed ut nibh aliquet, ullamcorper neque quis, sodales arcu. Aliquam
          id felis justo. Etiam non venenatis magna. Vivamus quis eros consequat, suscipit risus sodales, accumsan quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis sollicitudin velit, in efficitur tortor
          blandit in. In a consectetur sem. Proin sem lectus, convallis pretium mi sed, mattis aliquet ligula. Aliquam
          quis rhoncus libero. Ut rhoncus tortor massa, quis finibus risus consequat ut. Nullam dolor odio, pretium quis
          libero a, scelerisque imperdiet metus. Suspendisse lacinia convallis mollis. Aliquam ac nibh vitae velit
          laoreet tincidunt nec eu augue. Proin fringilla libero nibh, sit amet tempus tortor iaculis at. Aenean eget
          viverra lacus. Curabitur fringilla risus non tristique maximus. Nunc id pharetra odio. Duis vehicula ex
          mauris, sed pellentesque libero pellentesque placerat. Ut cursus elit orci, et faucibus lectus malesuada quis.
          Praesent in elementum ex. Duis luctus finibus leo sed placerat. In egestas ultrices ante, at sodales ligula
          sagittis ut. Proin ac nisl vel augue rutrum viverra. Maecenas sed nisl non diam pulvinar placerat. Praesent
          velit augue, vestibulum sed tempus in, laoreet quis nisi. Aliquam rutrum massa nisl, sed luctus turpis mattis
          id. In sed finibus nulla, vitae aliquam dui. Aenean et lorem velit. Sed gravida mauris sed lectus rutrum, vel
          tristique risus blandit. Nunc accumsan lectus eget nisi faucibus tincidunt. Fusce non congue sem. Suspendisse
          consectetur eu tellus nec suscipit. Nulla auctor ipsum sit amet nulla bibendum, in porta tortor laoreet. Duis
          sed vulputate nisi, sit amet condimentum nisl. Ut viverra viverra odio, non ullamcorper tellus facilisis eu.
          Phasellus suscipit maximus diam vel tempus. Donec vitae egestas purus. Integer euismod auctor lectus vel
          ultrices. Aenean id orci aliquet, tempor enim suscipit, iaculis arcu. Curabitur fringilla, enim convallis
          iaculis faucibus, nunc urna rhoncus orci, vel efficitur urna mi eget lorem. Donec consequat feugiat nisi sed
          imperdiet. Donec odio ex, auctor id purus placerat, accumsan ornare nunc. Morbi luctus mi cursus elit gravida,
          id aliquet felis suscipit. Donec eget mattis ipsum, nec varius ipsum. Sed ut turpis gravida, dignissim diam
          non, hendrerit ligula. Fusce congue sollicitudin libero, nec euismod massa tempus vitae. Integer ut lectus
          diam. Fusce feugiat eros id libero auctor mattis. Donec semper erat non libero maximus, a cursus dolor
          interdum. Pellentesque sollicitudin ex nec est tempor, eget viverra enim finibus. Proin ac nulla tellus.
          Aliquam id augue interdum, mattis dolor sed, convallis metus. Fusce quis mauris eu leo gravida posuere ut sit
          amet turpis. Nam eros odio, euismod sed semper nec, fringilla non urna. Vivamus risus metus, pellentesque
          cursus nisi congue, luctus volutpat lacus. Sed ut nibh aliquet, ullamcorper neque quis, sodales arcu. Aliquam
          id felis justo. Etiam non venenatis magna. Vivamus quis eros consequat, suscipit risus sodales, accumsan quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis sollicitudin velit, in efficitur tortor
          blandit in. In a consectetur sem. Proin sem lectus, convallis pretium mi sed, mattis aliquet ligula. Aliquam
          quis rhoncus libero. Ut rhoncus tortor massa, quis finibus risus consequat ut. Nullam dolor odio, pretium quis
          libero a, scelerisque imperdiet metus. Suspendisse lacinia convallis mollis. Aliquam ac nibh vitae velit
          laoreet tincidunt nec eu augue. Proin fringilla libero nibh, sit amet tempus tortor iaculis at. Aenean eget
          viverra lacus. Curabitur fringilla risus non tristique maximus. Nunc id pharetra odio. Duis vehicula ex
          mauris, sed pellentesque libero pellentesque placerat. Ut cursus elit orci, et faucibus lectus malesuada quis.
          Praesent in elementum ex. Duis luctus finibus leo sed placerat. In egestas ultrices ante, at sodales ligula
          sagittis ut. Proin ac nisl vel augue rutrum viverra. Maecenas sed nisl non diam pulvinar placerat. Praesent
          velit augue, vestibulum sed tempus in, laoreet quis nisi. Aliquam rutrum massa nisl, sed luctus turpis mattis
          id. In sed finibus nulla, vitae aliquam dui. Aenean et lorem velit. Sed gravida mauris sed lectus rutrum, vel
          tristique risus blandit. Nunc accumsan lectus eget nisi faucibus tincidunt. Fusce non congue sem. Suspendisse
          consectetur eu tellus nec suscipit. Nulla auctor ipsum sit amet nulla bibendum, in porta tortor laoreet. Duis
          sed vulputate nisi, sit amet condimentum nisl. Ut viverra viverra odio, non ullamcorper tellus facilisis eu.
          Phasellus suscipit maximus diam vel tempus. Donec vitae egestas purus. Integer euismod auctor lectus vel
          ultrices. Aenean id orci aliquet, tempor enim suscipit, iaculis arcu. Curabitur fringilla, enim convallis
          iaculis faucibus, nunc urna rhoncus orci, vel efficitur urna mi eget lorem. Donec consequat feugiat nisi sed
          imperdiet. Donec odio ex, auctor id purus placerat, accumsan ornare nunc. Morbi luctus mi cursus elit gravida,
          id aliquet felis suscipit. Donec eget mattis ipsum, nec varius ipsum. Sed ut turpis gravida, dignissim diam
          non, hendrerit ligula. Fusce congue sollicitudin libero, nec euismod massa tempus vitae. Integer ut lectus
          diam. Fusce feugiat eros id libero auctor mattis. Donec semper erat non libero maximus, a cursus dolor
          interdum. Pellentesque sollicitudin ex nec est tempor, eget viverra enim finibus. Proin ac nulla tellus.
          Aliquam id augue interdum, mattis dolor sed, convallis metus. Fusce quis mauris eu leo gravida posuere ut sit
          amet turpis. Nam eros odio, euismod sed semper nec, fringilla non urna. Vivamus risus metus, pellentesque
          cursus nisi congue, luctus volutpat lacus. Sed ut nibh aliquet, ullamcorper neque quis, sodales arcu. Aliquam
          id felis justo. Etiam non venenatis magna. Vivamus quis eros consequat, suscipit risus sodales, accumsan quam.
        </p>
      </div>
    </>
  );
};

export default Layout;
