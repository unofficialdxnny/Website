from setuptools import find_packages, setup
setup(
    name='fitbyte',
    packages=find_packages(),
    version='0.1.0',
    description='fitbyte allows users to be reminded to workout while sitting down for long durations.',
    author='unofficialdxnny (Danial Ahmed)',
    license='MIT',
    install_requires=['time', 'win10toast']
)   